import { Form, Button, Input, notification } from 'antd'
import React from 'react';
import { service } from '../api/RpcImpl'
import { dto } from '../api/gen/proto'

const UnsafeDeviceCaptcha = (props: dto.Bot.ICaptcha) => {
    const { botId, url } = props
    const handleSubmitClick = async () => {
        try {
            await service.solveCaptcha({
                botId: botId,
            })
            notification["success"]({
                message: '确认成功',
                description: "请等5秒后查看是否还有验证码",
            });
        } catch (e) {
            notification["error"]({
                message: '确认失败',
                description: e.toString(),
            });
        }
    }
    return (
        <>
            <Form>
                <Form.Item label="验证类型">
                    <span className="ant-form-text">设备锁</span>
                </Form.Item>
                <Form.Item label="验证URL">
                    <span>{url}</span>
                </Form.Item>
                <Form.Item >
                    <Button type="primary" onClick={handleSubmitClick}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default React.memo(UnsafeDeviceCaptcha)