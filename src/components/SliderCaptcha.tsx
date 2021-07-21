import React, { useState } from "react"
import { Form, Button, Input, notification } from 'antd'
import { service } from '../api/RpcImpl'
import { dto } from '../api/gen/proto'
import QRCode from 'qrcode.react'


const SliderCaptcha = (props: dto.Bot.ICaptcha) => {
    const { botId, url } = props
    const [ticket, setTicket] = useState("")
    const handleSubmitClick = async () => {
        try {
            await service.solveCaptcha({
                botId: botId,
                result: ticket
            })
            notification["success"]({
                message: '提交成功',
                description: "请等5秒后查看是否还有验证码",
            });
        } catch (e) {
            notification["error"]({
                message: '提交失败',
                description: e.toString(),
            });
        }
    }
    return (
        <>
            <Form>
                <Form.Item label="验证类型">
                    <span className="ant-form-text">滑块</span>
                </Form.Item>
                <Form.Item label="滑块URL">
                    <Input value={url}></Input>
                </Form.Item>
                <Form.Item label="滑块二维码">
                    <QRCode value={url} style={{ margin: "16px" }}></QRCode>
                    <div>推荐使用<a href="https://github.com/mzdluo123/TxCaptchaHelper/releases" target="_blank">滑块验证助手</a>扫码进行处理</div>
                </Form.Item>
                <Form.Item label="Ticket">
                    <Input onChange={(e) => { setTicket(e.target.value) }} />
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

export default React.memo(SliderCaptcha)

