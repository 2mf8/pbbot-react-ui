import { Form, Button, Input, notification } from 'antd'
import React, { useState } from 'react';
import { service } from '../api/RpcImpl'
import { dto } from '../api/gen/proto'

const SmsCaptcha = (props: dto.Bot.ICaptcha) => {
    const { botId } = props
    const [smsResult, setSmsResult] = useState("");
    const handleSubmitClick = async () => {
        try {
            await service.solveCaptcha({
                botId: botId,
                result: smsResult
            })
            notification["success"]({
                message: '提交成功',
                description: "请等5秒后查看是否还有验证码",
                duration: 3,
            });
        } catch (e) {
            notification["error"]({
                message: '提交失败',
                description: e.toString(),
                duration: 3,
            });
        }
    }
    return (
        <>
            <Form>
                <Form.Item label="验证类型">
                    <span className="ant-form-text">手机短信</span>
                </Form.Item>
                <Form.Item label="验证码">
                    <Input onChange={(e) => { setSmsResult(e.target.value) }} />
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

export default React.memo(SmsCaptcha)