import { Anchor, Button, Card, Col, Collapse, Divider, Form, Input, Layout, Menu, Row, Space, Steps, Table, Tag, Typography } from 'antd'
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
import "./styles/dashboard.css"
import ButtonGroup from 'antd/es/button/button-group'


const generateData = () => {
  const dat = [];
  for (let i = 0; i < 100; i++) {
    dat.push({
      id: faker.datatype.number(1000),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      status: Math.random() > 0.5 ? true : false,
    })
  }
  return dat;
}

const data = generateData();

function App() {
  const [collapsed, setCollapsed] = useState(false);

// const { Link } = <Anchor />;

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
            <Card>
              <Form>
                <Form.Item label={"Name"} >
                  <Input
                  placeholder='Name' />
                </Form.Item>
              </Form>
            </Card>
            <Card>
              <Space>
                <Steps 
                  current={1} 
                  items={[
                    {
                      title: "Signup",
                      description: "Please sign up or else I'll woop your ass"
                    },
                    {
                      title: "Buy subscription",
                      description: "Buy some subscription"
                    },
                    {
                      title: "Something else",
                      description: "Do something with this"
                    },
              ]}/>
              </Space>
            </Card>
            <Row gutter={10}>
              {/* <Col span={6}>
                <Card>
                  <Typography.Title>something</Typography.Title>
                </Card>
              </Col> */}
              <Col span={18}>
                <Table 
                  dataSource={data} 
                  style={{ marginTop: 10, }}
                  columns={[
                    {
                      dataIndex: "id",
                      title: "ID",
                      key: "id",
                    },
                    {
                      dataIndex: "name",
                      title: "name",
                      key: "name",
                    },
                    {
                      dataIndex: "email",
                      title: "Email Id",
                      key: "email",
                    },
                    {
                      dataIndex: "status",
                      title: "Email Id",
                      render: (val) => 
                        val ? <Tag>Active</Tag> : <Tag>Inactive</Tag>
                    },
                    {
                      dataIndex: "Actions",
                      render: () => <ButtonGroup>
                        <Button>Edit</Button>
                        <Button type='primary' danger>Delete</Button>

                      </ButtonGroup>
                    
                    },
                  ]}
                  />
                 {/* <Anchor>
                  <Link href="#components-anchor-demo-basic" title="Basic demo" />
                   <Link href="#components-anchor-demo-static" title="Static demo" />
                  <Link href="#API" title="API">
                    <Link href="#Anchor-Props" title="Anchor Props" />
                    <Link href="#Link-Props" title="Link Props" />
                </Link>
                </Anchor> */}
              </Col>
            </Row>
          </Content>
        </Layout>
    </Layout>
  )
}

export default App
