import React, { useState } from 'react'
import { Modal, Form, Input, Button } from 'antd'
import { dto } from '../api/gen/proto'
import SmsCaptcha from './SmsCaptcha'



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



            </Modal>
        </>
    )
}

export default React.memo(SolveCaptcha)