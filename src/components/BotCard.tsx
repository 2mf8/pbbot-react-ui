import React, { useState } from 'react'
import { Row, Col, Card, Avatar, Popconfirm, notification } from 'antd';
import { QqOutlined, SettingOutlined, VerifiedOutlined, DeleteOutlined, LoginOutlined, ArrowRightOutlined, MessageOutlined, QrcodeOutlined, PictureOutlined } from '@ant-design/icons'
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
            });
        } catch (e) {
            notification["error"]({
                message: '删除失败',
                description: e.toString(),
            });
        }
    }
    return (
        <>
            <Card
                size="small"
                style={{ width: 240 }}
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
                    <Col offset={1} span={6} style={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={`http://q2.qlogo.cn/headimg_dl?dst_uin=${botId}&spec=640`} />
                    </Col>
                    <Col offset={1} span={14} style={{ textAlign: "left", fontSize: "16px" }}>
                        <div>
                            状态：{isOnline ? "在线" : "离线"}<QqOutlined style={{ color: isOnline ? "green" : "red" }} />
                        </div>
                        <div>验证：滑块<ArrowRightOutlined /></div>
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