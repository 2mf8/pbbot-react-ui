import React, { useEffect, useRef, useState } from 'react';
import { Modal, Form, InputNumber, Button, Skeleton, notification, Image, Input, Alert } from 'antd'
import { dto } from '../api/gen/proto'
import { service } from '../api/RpcImpl'
import Long from 'long'
interface PasswordLoginProp {
    isVisible: boolean;
    onClose: (() => void);
}
const PasswordLogin = (props: PasswordLoginProp) => {
    const { isVisible, onClose } = props
    const [botId, setBotId] = useState("")
    const [password, setPassword] = useState("")
    const [deviceSeed, setDeviceSeed] = useState<number>(new Date().getTime());

    const handleCreateBot = async () => {
        try {
            await service.createBot({
                botId: Long.fromString(botId),
                password: password,
                deviceSeed: Long.fromNumber(deviceSeed),
            })
            notification["success"]({
                message: '创建成功',
                description: "5秒后刷新机器人列表，如有验证码请点击图标处理",
                duration: 3,
            });
            onClose()
        } catch (e) {
            notification["error"]({
                message: '创建失败',
                description: e.toString(),
                duration: 3,
            });
        }
    }

    return (
        <>
            <Modal
                title="密码创建"
                visible={isVisible}
                onCancel={onClose}
                onOk={handleCreateBot}
                cancelText="取消"
                okText="创建"
                destroyOnClose={true}
            >

                <Form>
                    <Form.Item label="账号">
                        <Input onChange={(e) => { setBotId(e.target.value) }}></Input>
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input.Password onChange={(e) => { setPassword(e.target.value) }}></Input.Password>
                    </Form.Item>
                    <Form.Item label="设备随机种子">
                        <InputNumber
                            min={0}
                            value={deviceSeed}
                            max={4503599627370496}
                            style={{ width: 180 }}
                            onChange={(value) => { setDeviceSeed(value) }}
                        />
                        <Button
                            style={{ marginLeft: "16px" }}
                            onClick={() => setDeviceSeed(0)}
                        >
                            使用账号
                        </Button>
                    </Form.Item>
                    <Alert message="随机种子是数字，随机种子相同生成的设备文件相同，随机种子设为0默认使用账号作为种子。" type="info" />
                </Form>
            </Modal>
        </>
    )

}

export default React.memo(PasswordLogin)