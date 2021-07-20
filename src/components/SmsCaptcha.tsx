import { Form, Button, Input } from 'antd'
import React, { useState } from 'react';
import { service } from '../api/RpcImpl'
import { dto } from '../api/gen/proto'

const SmsCaptcha = (props: dto.Bot.ICaptcha) => {
    const { botId } = props
    const [smsResult, setSmsResult] = useState("");
    const handleSmsResultChange = (e) => {
        setSmsResult(e.target.value)
    }
    const handleSubmitClick = () => {
        service.solveCaptcha({
            botId: botId,
            result: smsResult
        })
    }
    return (
        <>
            <Form>
                <Form.Item label="验证类型">
                    <span className="ant-form-text">手机短信</span>
                </Form.Item>
                <Form.Item label="验证码">
                    <Input onChange={handleSmsResultChange} />
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