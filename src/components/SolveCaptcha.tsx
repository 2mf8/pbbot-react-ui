import React from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { dto } from '../api/gen/proto'
import SmsCaptcha from './SmsCaptcha'
import SliderCaptcha from './SliderCaptcha'
import UnsafeDeviceCaptcha from './UnsafeDeviceCaptcha'

interface SolveCaptchaProp {
    isVisible: boolean;
    onClose: (() => void);
    captcha: dto.Bot.ICaptcha
}
const SolveCaptcha = (props: SolveCaptchaProp) => {
    const { isVisible, onClose, captcha } = props;
    return (
        <>
            <Modal
                visible={isVisible}
                onCancel={onClose}
                okButtonProps={{ style: { display: 'none' } }}
                cancelText={"关闭"}
            >
                {!captcha &&
                    <Form>
                        <Form.Item label="验证状态">
                            <span className="ant-form-text">已完成</span>
                        </Form.Item>
                    </Form>
                }


                {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.SMS && <SmsCaptcha botId={captcha.botId} />}
                {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.SLIDER_CAPTCHA && <SliderCaptcha botId={captcha.botId} url={captcha.url} />}
                {!!captcha && captcha.captchaType == dto.Bot.Captcha.CaptchaType.UNSAFE_DEVICE_LOGIN_VERIFY && <UnsafeDeviceCaptcha botId={captcha.botId} url={captcha.url} />}
            </Modal>
        </>
    )
}

export default React.memo(SolveCaptcha)