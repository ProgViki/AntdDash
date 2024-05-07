import { Anchor, Avatar, Button, Card, Col, Collapse, Descriptions, Divider, Empty, FloatButton, Form, Input, Layout, List, Menu, Modal, notification, Row, Space, Steps, Table, Tag, TimePicker, Typography } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { GrAdd, GrOrganization } from 'react-icons/gr'
import { HiOutlineHome } from 'react-icons/hi'
import "../styles/dashboard.css";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineMoneyCollect } from 'react-icons/ai'
import {faker} from "@faker-js/faker";
import "../styles/dashboard.css";
import ButtonGroup from 'antd/es/button/button-group'
import dayjs from "dayjs";
import { ExclamationCircleOutlined, PayCircleOutlined, PlusOutlined } from '@ant-design/icons'


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

function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

// const { Link } = <Anchor />;

  return (
    <Layout className='container'>
      <Header
        style={{
          backgroundColor: "black",
          color: "white",
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
          <Sider collapsed={collapsed} theme='dark'>
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
                {
                  label: 'Pricing',
                  key: 'user_pricing',
                  icon: <PayCircleOutlined />
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
              <FloatButton  icon={<GrAdd style={{color: "black"}} />} />
              <div className="flex flex-row items-center gap-8 ">
              <Button onClick={()=> {
              notification.success({
                message: "User created successfully"
              })
            }}>
                  Show notification
                </Button>
                <Button onClick={()=> setModalOpen(true)}>
                  Add user
                </Button>
                
                <Button type='primary' danger
                  onClick={() => {
                    Modal.confirm({
                      title: 'Are you sure you want to delete this?',
                      icon: <ExclamationCircleOutlined />,
                      content: 'Some descriptions',
                      okText: 'Yes',
                      okType: 'danger',
                      cancelText: 'No',
                    });
                  }
                  }
                  >Delete</Button>
              </div>
            
             
              <List bordered dataSource={data.slice(0, 5)} 
              renderItem={(item) =>
                {return <List.Item >
                  <Descriptions title="Users Details" bordered >
                <Descriptions.Item label={"Name"}>{item.name} </Descriptions.Item>
                <Descriptions.Item label={"Roll"}>{item.email}</Descriptions.Item>
                <Descriptions.Item label={"Address"}> {item.status ? "Active" : "Not Active"}
                </Descriptions.Item>
              </Descriptions>
                </List.Item>}
              }/>
              <List>
                <List.Item>Hello</List.Item>
                <List.Item>test</List.Item>
                <List.Item>test1</List.Item>
              </List>
              <Descriptions title="Users data" bordered>
                <Descriptions.Item span={2} label={"Name"}>John Doe</Descriptions.Item>
                <Descriptions.Item label={"Roll"}>18</Descriptions.Item>
                <Descriptions.Item label={"Adrress"}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero cupiditate excepturi nam, doloremque quae 
                  necessitatibus harum expedita distinctio aliquam obcaecati!
                </Descriptions.Item>
              </Descriptions>
              <Empty />
              <Avatar 
                  size={"large"}
                  src={"https://avatars.slack-edge.com/2021-09-12/2466008637783_30bd329abf6ea2c53afc_192.jpg"}
                />
              <Form 
                onFinish={(values) => {
                  console.log(values);
                }}
                layout= "vertical">
                <Form.Item label={"Name"} >
                  <Input />
                </Form.Item>
                <Form.Item label={"Email"} >
                  <Input type="email"/>
                </Form.Item>
                <Form.Item label={"Password"} >
                  <Input type="password"/>
                </Form.Item>
                <Form.Item name={"time"} label={"pick some time"} >
                <TimePicker 
                  defaultValue={dayjs("00:00:00", "HH:mm:ss")}
                  format="HH:mm:ss"
                  placeholder="Select time"
                  style={{ width: 160 }}
                  size="large"
                
                    />
                </Form.Item>
               
                <Form.Item>
                  <Button htmlType="submit" type="primary">Sign up</Button>
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
        <Modal open={modalOpen}
        onCancel={() => setModalOpen(false)}

         title="Add a new user" >
          <Form>
            <Form.Item label={"Name"} >
              <Input />
            </Form.Item>
            <Form.Item label={"Email"} >
              <Input type="email"/>
            </Form.Item>
            <Form.Item label={"Password"} >
              <Input />
            </Form.Item>
          </Form>
        </Modal>
       
    </Layout>
  )
}

export default DashBoard
