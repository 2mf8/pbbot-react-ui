import React, { useState } from 'react';
import { Modal, Form, InputNumber, Button, notification, Input, Alert, Select } from 'antd'
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

    const handleCreateBot = async () => {
        try {
            await service.createBot({
                botId: Long.fromString(botId),
                password: password
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
                    <Form.Item label="账号" style={{marginBottom: "12px"}}>
                        <Input onChange={(e) => { setBotId(e.target.value) }}></Input>
                    </Form.Item>
                    <Form.Item label="密码" style={{marginBottom: "12px"}}>
                        <Input.Password onChange={(e) => { setPassword(e.target.value) }}></Input.Password>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )

}

export default React.memo(PasswordLogin)
