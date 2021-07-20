import React, { useState } from 'react';
import './App.css';
import { Layout, Button, Row, Col, Card, Input, notification, Empty } from 'antd';
import BotCard from './components/BotCard'
import QRCodeLogin from './components/QRCodeLogin'
import { useInterval } from './utils/interval'
import { service } from './api/RpcImpl'
import { dto } from './api/gen/proto';

const { Header, Content } = Layout;
const App = () => {
  const [showQRCodeLogin, setShowQRCodeLogin] = useState<boolean>(false);

  const [listBotResp, setListBotResp] = useState<dto.IListBotResp>({});
  useInterval(async () => {
    try {
      setListBotResp(await service.listBot({}))
    } catch (e) {
      notification["error"]({
        message: '查询机器人失败',
        description: "请检查程序是否正常运行",
      });
    }
  }, 3000)

  return (
    <div className="App">
      <Layout style={{ height: "100vh" }}>
        <Header>
          <div className="logo">ProtobufBot</div>
        </Header>
        <Content>
          <div style={{margin:"20px"}}>
            <Button type="primary" onClick={() => setShowQRCodeLogin(true)}>扫码创建</Button>
            <QRCodeLogin isVisible={showQRCodeLogin} onClose={() => { setShowQRCodeLogin(false) }}></QRCodeLogin>
          </div>
          {!!listBotResp && !!listBotResp.botList ?
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ margin: '20px' }}>
              {
                listBotResp.botList.map(bot => (
                  <Col
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
