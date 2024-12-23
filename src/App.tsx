import { useState } from 'react';
import './App.css';
import { Layout, Button, Row, Col, notification, Empty } from 'antd';
import { GithubOutlined, SettingOutlined } from '@ant-design/icons'
import BotCard from './components/BotCard'
import QRCodeLogin from './components/QRCodeLogin'
import PasswordLogin from './components/PasswordLogin'
import PluginSetting from "./components/PluginSetting";
import { useInterval } from './utils/interval'
import { service } from './api/RpcImpl'
import { dto } from './api/gen/proto';
import BaseInfoSet from './components/BaseInfoSet';

const { Header, Content } = Layout;
const App = () => {
  const [showQRCodeLogin, setShowQRCodeLogin] = useState<boolean>(false);
  const [showPasswordLogin, setShowPasswordLogin] = useState<boolean>(false);
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const [showBaseSetting, setShowBaseSetting] = useState<boolean>(false)

  const [listBotResp, setListBotResp] = useState<dto.IListBotResp>({});
  useInterval(async () => {
    try {
      setListBotResp(await service.listBot({}))
    } catch (e) {
      notification["error"]({
        message: '查询机器人失败',
        description: "请检查程序是否正常运行",
        duration: 1,
      });
    }
  }, 3000)

  return (
    <div className="App">
      <Layout style={{ minHeight: "100vh" }}>
        <Header>
          <div className="logo">ProtobufBot</div>
        </Header>
        <Content>
          <div >
            <Button style={{ margin: "20px 8px" }} type="primary" onClick={() => setShowBaseSetting(true)}>基础设置</Button>
            <BaseInfoSet isVisible={showBaseSetting} onClose={() => { setShowBaseSetting(false) }}/>
            <Button style={{ margin: "20px 8px" }} type="primary" onClick={() => setShowQRCodeLogin(true)}>扫码创建</Button>
            <QRCodeLogin isVisible={showQRCodeLogin} onClose={() => { setShowQRCodeLogin(false) }}/>
            <Button style={{ margin: "20px 8px" }} type="primary" onClick={() => setShowPasswordLogin(true)}>密码创建</Button>
            <PasswordLogin isVisible={showPasswordLogin} onClose={() => {setShowPasswordLogin(false)}}/>
            <Button style={{ margin: "20px 8px" }} shape="circle" icon={<SettingOutlined />} onClick={() => setShowSetting(true)}/>
            <PluginSetting isVisible={showSetting} onClose={() => { setShowSetting(false) }}/>
            <Button style={{ margin: "20px 8px" }} shape="circle" icon={<GithubOutlined />} href="https://github.com/ProtobufBot/ProtobufBot" target="_blank"/>
          </div>
          {!!listBotResp && !!listBotResp.botList ?
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '20px' }}>
              {
                listBotResp.botList.sort((b1, b2) => b1.botId.toString().localeCompare(b2.botId.toString())).map(bot => (
                  <Col
                    key={bot.botId.toString()}
                    xl={{ span: 6 }}
                    lg={{ span: 8 }}
                    md={{ span: 12 }}
                    sm={{ span: 12 }}
                    xs={{ span: 24 }}
                    className="bot-card-col">
                    <BotCard botId={bot.botId} isOnline={bot.isOnline} captcha={bot.captcha} />
                  </Col>)
                )
              }
            </Row>
            :
            <Empty />
          }

        </Content>
      </Layout>
    </div >
  );
}

export default App;
