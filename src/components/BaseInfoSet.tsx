import React, { useState } from 'react';
import { Modal, Form, InputNumber, Button, notification, Input, Alert, Select, Empty } from 'antd'
import { service } from '../api/RpcImpl'
import Long from 'long'
import { dto } from './../api/gen/proto';
import { useInterval } from './../utils/interval'
import { render } from '@testing-library/react';

interface BaseInfoSetProp{
    isVisible: boolean;
    onClose: (() => void);
}

const BaseInfoSet = (props: BaseInfoSetProp) => {
    const { isVisible, onClose } = props
    const [platform, setPlatform] = useState("default")
    const [appVersion, setAppVersion] = useState("default")
    const [signServer, setSignServer] = useState("default")
    const [versions, setVersions] = useState<string[]>([])

    const [getAllVersion, setGetAllVersion] = useState<dto.IGetAllVersionResp>({})
    useInterval(async () => {
        try {
          setGetAllVersion(await service.getAllVersion({}))
        } catch (e) {
          notification["error"]({
            message: '获取基础信息失败',
            description: "请检查程序是否正常运行",
            duration: 1,
          });
        }
      }, 3000)
    
    const handleVersions = (getAllVersion: dto.IGetAllVersionResp,key: string) => {
        let _versions: string[] = []
        !!getAllVersion && !!getAllVersion.allVersion ? getAllVersion.allVersion.map((bi)=>{
            if (bi.platform == key) {
                _versions = bi.appVersion
            }
        }) : _versions = []
        setVersions(_versions)
    }
    const handleSetBaseInfo = async () => {
        try {
            await service.setBaseInfo({
                platform: platform,
                appVersion: appVersion,
                signServer: signServer
            })
            notification["success"]({
                message: '设置成功',
                duration: 3,
            });
            onClose()
        } catch(e) {
            notification["error"]({
                message: '设置失败',
                description: e.toString(),
                duration: 3,
              });
        }
    }
    return (
        <>
        <Modal
        title="基础设置"
                visible={isVisible}
                onCancel={onClose}
                onOk={handleSetBaseInfo}
                cancelText="取消"
                okText="设置"
                destroyOnClose={true}>
            {!!getAllVersion && !!getAllVersion.allVersion ? <Form>
                <Form.Item label="Platform"><Select 
                    value={platform}
                    style={{ width: 180 }}
                    onChange={(value) => {
                        setPlatform(value);
                        handleVersions(getAllVersion, value)
                     }}
                >
                    <Select.Option value={"default"}>Default</Select.Option>
                    {getAllVersion.allVersion.map(baseInfo => (<Select.Option value={baseInfo.platform}>{baseInfo.platform}</Select.Option>))}
                    </Select></Form.Item>
                    <Form.Item label="AppVersion"><Select 
                    value={appVersion}
                    style={{ width: 180 }}
                    onChange={(value) => { setAppVersion(value) }}
                >
                    <Select.Option value={"default"}>Default</Select.Option>
                    {
                        versions.map(version=>(<Select.Option value={version}>{version}</Select.Option>))
                    }
                    </Select></Form.Item>
            </Form> : <Form>
                <Form.Item label="Platform" style={{marginBottom: "12px"}}>
                <Input value={platform} onChange={(e) => { setPlatform(e.target.value) }}></Input>
            </Form.Item>
            <Form.Item label="AppVersion" style={{marginBottom: "12px"}}>
                <Input value={appVersion} onChange={(e) => { setAppVersion(e.target.value) }}></Input>
            </Form.Item>
                </Form>}
            <Form.Item label="SignServer" style={{marginBottom: "12px"}}>
                <Input value={signServer} onChange={(e) => { setSignServer(e.target.value) }}></Input>
            </Form.Item>
        </Modal>
        </>
    )
}

export default React.memo(BaseInfoSet)