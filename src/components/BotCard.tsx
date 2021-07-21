import React, { useState } from 'react'
import { Row, Col, Card, Avatar, Popconfirm, notification } from 'antd';
import { QqOutlined, SettingOutlined, VerifiedOutlined, DeleteOutlined, LoginOutlined, ArrowRightOutlined, MessageOutlined, CheckOutlined, QrcodeOutlined, PictureOutlined, LockOutlined } from '@ant-design/icons'
import { dto } from '../api/gen/proto'
import { service } from '../api/RpcImpl'
import SolveCaptcha from './SolveCaptcha'
const BotCard = (props: dto.IBot) => {
    const { botId, isOnline, captcha } = props;

    const [showSolveCaptcha, setShowSolveCaptcha] = useState<boolean>(false);

    const handleDeleteBot = async () => {
        try {
            await service.deleteBot({ botId: botId })
            notification["success"]({
                message: '删除成功',
                description: "5秒后刷新机器人列表",
                duration: 3,
            });
        } catch (e) {
            notification["error"]({
                message: '删除失败',
                description: e.toString(),
                duration: 3,
            });
        }
    }
    return (
        <>
            <Card
                size="small"
                style={{ width: 280 }}
                title={botId}
                actions={[
                    // <LoginOutlined key="login" />,
                    <VerifiedOutlined key="verified" onClick={() => setShowSolveCaptcha(true)} />,
                    // <SettingOutlined key="setting" />,
                    <Popconfirm
                        title="确认删除？"
                        okText="Yes"
                        onConfirm={handleDeleteBot}
                        cancelText="No"
                        okType="danger"
                    >
                        <DeleteOutlined key="delete" />
                    </Popconfirm>,
                ]}
            >
                <Row gutter={24}>
                    <Col offset={2} span={8} style={{ display: "flex", alignItems: "center" }}>
                        <Avatar size={60} shape="square" src={`http://q2.qlogo.cn/headimg_dl?dst_uin=${botId}&spec=640`} />
                    </Col>
                    <Col offset={0} span={14} style={{ textAlign: "left", fontSize: "16px" }}>
                        <div style={{ height: "30px" }}>
                            状态：{isOnline ? "在线" : "离线"}<QqOutlined style={{ color: isOnline ? "green" : "red", marginLeft: "8px" }} />
                        </div>
                        <div style={{ height: "30px" }}>
                            验证：
                            {!captcha && (<span>已完成<CheckOutlined style={{ marginLeft: "8px" }} /></span >)}
                            {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.SMS && (<span>短信<MessageOutlined style={{ marginLeft: "8px" }} /></span >)}
                            {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.SLIDER_CAPTCHA && (<span>滑块<ArrowRightOutlined style={{ marginLeft: "8px" }} /></span >)}
                            {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.UNSAFE_DEVICE_LOGIN_VERIFY && (<span>设备锁<LockOutlined style={{ marginLeft: "8px" }} /></span >)}
                        </div>
                    </Col>
                </Row>
            </Card>
            <SolveCaptcha
                isVisible={showSolveCaptcha}
                onClose={() => { setShowSolveCaptcha(false) }}
                captcha={captcha}
            />
        </>
    )
}
export default React.memo(BotCard)