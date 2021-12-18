import React, {useState} from 'react';
import {Modal, Form, Button, notification, Input, Select, Switch, Divider} from 'antd'
import {service} from '../api/RpcImpl'
import {dto} from "../api/gen/proto";
import {DeleteOutlined, SyncOutlined, FileAddOutlined} from '@ant-design/icons'

interface PluginSettingProp {
  isVisible: boolean;
  onClose: (() => void);
}

const PluginSetting = (props: PluginSettingProp) => {
  const {isVisible, onClose} = props
  const [listPluginResp, setListPluginResp] = useState<dto.IListPluginResp>({});
  const [plugin, setPlugin] = useState<dto.IPlugin>({});

  const handleSavePlugin = async () => {
    try {
      await service.savePlugin({
        plugin: plugin
      })
      await handleListPlugin()
      await handleNewPlugin()
      notification["success"]({
        message: '保存成功',
        duration: 3,
      });
    } catch (e) {
      notification["error"]({
        message: '创建失败',
        description: e.toString(),
        duration: 3,
      });
    }
  }

  const handleListPlugin = async () => {
    try {
      let resp = await service.listPlugin({})
      for (let p of resp.plugins) {
        if (p.urls.length === 0) {
          p.urls = []
        }
      }
      setListPluginResp(resp)
    } catch (e) {
      notification["error"]({
        message: '查询插件失败',
        description: "请检查程序是否正常运行",
        duration: 1,
      });
    }

  }

  const handleDeletePlugin = async () => {
    try {
      await service.deletePlugin({name: plugin.name})
      await handleListPlugin()
      await handleNewPlugin()
    } catch (e) {
      notification["error"]({
        message: '删除插件失败',
        description: "请检查程序是否正常运行",
        duration: 1,
      });
    }
  }

  const handleNewPlugin = async () => {
    setPlugin({
      name: "",
      disabled: false,
      json: false,
      urls: [""],
    })
  }

  const handlePluginChange = async (name: string) => {
    let plugins = listPluginResp.plugins.filter((p) => p.name === name)
    if (plugins.length > 0) {
      setPlugin(plugins[0])
    } else {
      await handleNewPlugin()
    }
  }

  return (
    <>
      <Modal
        title="插件配置"
        visible={isVisible}
        onCancel={onClose}
        destroyOnClose={true}
        footer={null}
      >
        <Form
          labelCol={{span:6}}
          wrapperCol={{span:18}}
        >
          <Form.Item label="插件列表" style={{marginBottom: "12px"}}>
            {!!listPluginResp && listPluginResp.plugins ?
              <Select
                style={{width: "120px"}}
                value={plugin.name}
                onChange={handlePluginChange}
              >
                {listPluginResp.plugins.map((plugin) => (
                  <Select.Option value={plugin.name}>{plugin.name}</Select.Option>
                ))}
              </Select>
              :
              <Select
                style={{width: "120px"}}
                disabled
              />
            }
            <Button
              style={{margin: "8px"}}
              onClick={handleListPlugin}
              shape="circle"
              icon={<SyncOutlined/>}
            />
            <Button
              style={{margin: "8px"}}
              onClick={handleNewPlugin}
              shape="circle"
              icon={<FileAddOutlined/>}
            />
            <Button
              style={{margin: "8px"}}
              onClick={handleDeletePlugin}
              shape="circle"
              icon={<DeleteOutlined/>}
              danger
            />
          </Form.Item>
          <Divider style={{margin: "8px"}}/>
          <Form.Item label="名称" style={{marginBottom: "12px"}}>
            <Input
              value={plugin.name}
              onChange={(e) => {
                setPlugin({
                  ...plugin,
                  name: e.target.value
                })
              }}
              style={{display: "inline-block", width: "120px"}}
            />
          </Form.Item>
          <Form.Item label="启用" style={{marginBottom: "12px"}}>
            <Switch
              checked={!plugin.disabled}
              onChange={(v) => {
                setPlugin({
                  ...plugin,
                  disabled: !v
                })
              }}
            />
          </Form.Item>
          <Form.Item label="JSON上报" style={{marginBottom: "12px"}}>
            <Switch
              checked={plugin.json}
              onChange={(v) => {
                setPlugin({
                  ...plugin,
                  json: v
                })
              }}
            />
          </Form.Item>
          <Form.Item label="上报URL" style={{marginBottom: "12px"}}>
            <Input
              value={!!plugin.urls && plugin.urls.length > 0 ? plugin.urls[0] : ""}
              onChange={(e) => {
                setPlugin({
                  ...plugin,
                  urls: [e.target.value]
                })
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleSavePlugin} type="primary">保存</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )

}

export default React.memo(PluginSetting)
