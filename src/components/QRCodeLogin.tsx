import { Modal, Form, InputNumber, Button, Skeleton, notification, Image, Alert, Select } from 'antd'
import { dto } from '../api/gen/proto'
import { service } from '../api/RpcImpl'
import React, { useRef, useState } from 'react';
import { getImage } from '../utils/img'
import { useInterval } from '../utils/interval'
import Long from "long";


interface QRCodeLoginProp {
    isVisible: boolean;
    onClose: (() => void);
}
const QRCodeLogin = (props: QRCodeLoginProp) => {
    const { isVisible, onClose } = props;
    const [deviceSeed, setDeviceSeed] = useState<number>(new Date().getTime());
    // 如果不是{}，轮询获取状态
    const [fetchQRCodeResp, setFetchQRCodeResp] = useState<dto.IQRCodeLoginResp>({});
    const queryQRCodeRespRef = useRef<dto.IQRCodeLoginResp>({});

    useInterval(async () => {
        if (!!fetchQRCodeResp && !!fetchQRCodeResp.sig) {
            try {
                queryQRCodeRespRef.current = await service.queryQRCodeStatus({ sig: fetchQRCodeResp.sig })
                console.log(queryQRCodeRespRef.current)
            } catch (e) {
                console.log(e.toString())
                setFetchQRCodeResp({})
                return
            }

            if (queryQRCodeRespRef.current.state === dto.QRCodeLoginResp.QRCodeLoginState.QRCodeConfirmed) {
                setFetchQRCodeResp({})
                notification["success"]({
                    message: '登录成功',
                    description: "5秒后刷新机器人列表",
                    duration: 3,
                });
                onClose()
                return
            }

            if (queryQRCodeRespRef.current.state === dto.QRCodeLoginResp.QRCodeLoginState.QRCodeTimeout) {
                await handleScanFailed("二维码超时")
                return
            }

            if (queryQRCodeRespRef.current.state === dto.QRCodeLoginResp.QRCodeLoginState.QRCodeCanceled) {
                await handleScanFailed("二维码已取消")
                return
            }
        }
    }, 3000)


    // 扫码失败
    const handleScanFailed = async (msg: string) => {
        if (!!fetchQRCodeResp && !!fetchQRCodeResp.sig) {
            console.log(!!fetchQRCodeResp)
            notification["error"]({
                message: '请重新获取二维码',
                description: msg,
                duration: 3,
            });
        }
        setFetchQRCodeResp({})
    }

    const handleFetchQRCode = async () => {
        try {
            let resp = await service.fetchQRCode({ deviceSeed: Long.fromNumber(deviceSeed) })
            setFetchQRCodeResp(resp)
        } catch (e) {
            notification["error"]({
                message: '获取二维码失败',
                description: e.toString(),
                duration: 3,
            });
        }
    }

    return (
        <>
            <Modal
                title="扫码创建"
                visible={isVisible}
                onCancel={onClose}
                okButtonProps={{ style: { display: 'none' } }}
                cancelText="取消"
                destroyOnClose={true}
                afterClose={() => setFetchQRCodeResp({})}
            >
                <Form>
                    <Form.Item label="设备种子" style={{marginBottom: "12px"}}>
                        <InputNumber
                            min={0}
                            value={deviceSeed}
                            max={4503599627370496}
                            style={{ width: 180 }}
                            onChange={(value) => { setDeviceSeed(value) }}
                        />
                        <div style={{ color: "red" }}>种子为账号，方便后续Session登录</div>
                    </Form.Item>
                    <Form.Item style={{marginBottom: "12px"}}>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          onClick={handleFetchQRCode}
                        >
                            获取二维码
                        </Button>
                    </Form.Item>
                </Form>
                <div
                    style={{ margin: "24px 0 12px 0", textAlign: "center" }}
                >
                    {!!fetchQRCodeResp && !!fetchQRCodeResp.sig ?
                        (<div >
                            <Image
                                style={{ width: "160px", height: "160px" }}
                                src={getImage(fetchQRCodeResp.imageData)}
                            />
                            <p style={{ margin: "12px" }}>扫码登录机器人</p>
                        </div>) :
                        (<div >
                            <Skeleton.Image
                                style={{ width: "160px", height: "160px" }}
                            />
                            <p style={{ margin: "12px" }}>请先获取二维码</p>
                        </div>)
                    }

                    {/* <Image
                    width={200}
                    height={200}
                    src="error"
                    fallback="data:image/png;base64,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"
                /> */}
                </div>
            </Modal>
        </>
    )
}

export default React.memo(QRCodeLogin)
