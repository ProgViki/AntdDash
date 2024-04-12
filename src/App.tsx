import { Anchor, Card, Col, Collapse, Divider, Layout, Menu, Row, Space, Table, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { GrOrganization } from 'react-icons/gr'
import { HiOutlineHome } from 'react-icons/hi'
import "./styles/dashboard.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
import {faker} from "@faker-js/faker";


const generateData = () => {
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false,

    })
  }}



function App() {
  const [collapsed, setCollapsed] = useState(false);

const {Link} = <Anchor />;

  return (
    <Layout className='container'>
      <Header
        style={{
          backgroundColor: "white",
        }}>
          <div style={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            // padding: "0 20px",
          }}>
            <GiHamburgerMenu size={24} style={{marginRight: 20}}/>
          <div className='brand'>Cool dashboard</div>
          </div>
        </Header>
        <Layout>
          <Sider collapsed={collapsed} theme='light'>
            <Menu
              mode='inline'
              items={[
                {
                  label: 'Home',
                  key: 'home',
                  icon: <HiOutlineHome />,
                  children: [
                    {
                      label: 'Add Profile',
                      key: 'all_users',
                      icon: <BsPerson />,
                    },
                    {
                      label: 'Add Profile',
                      key: 'all_users',
                      icon: <BsPerson />,
                    },
                  ] 
                },
                {
                  label: 'About us',
                  key: 'about_us',
                  icon: <GrOrganization />
                },
              ]}
              >
              
            </Menu>
          </Sider>
          <Content className='content'>
            <Space direction="horizontal">
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$2323</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$2323</Typography.Title>
              </Card>
              <Card>
                <Space direction="horizontal">
                  <AiOutlineMoneyCollect />
                  <small>Total sales</small>
                </Space>
                <Typography.Title>$2323</Typography.Title>
              </Card>
            </Space>
            <Divider />

            <Row gutter={10}>
              <Col span={6}>
                <Card>
                  <Typography.Title>something</Typography.Title>
                </Card>
              </Col>
              <Col span={18}>
                <Anchor>
                  <Link href="#test" title="Link 1" />
                  <Link href="#test" title="Link 1" />
                  <Link href="#test" title="Link 1" />
                  <Link href="#test" title="Link 1" />
                  <Link href="#test" title="Link 1" />

                </Anchor>
              </Col>
            </Row>
          </Content>
        </Layout>
    </Layout>
  )
}

export default App
