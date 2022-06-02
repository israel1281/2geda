import React, { useState } from 'react';
import './home.css';
import {
    Layout,
    Menu,
    Input,
    Form,
    Button,
    Space,
    Typography,
    Avatar,
    Image
   } from 'antd';
import {
    MenuUnfoldOutlined,
    UserOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    ShopOutlined,
    MessageOutlined,
    BellOutlined
  } from '@ant-design/icons';
import Top from '../components/Header'
import post from '../assets/post.png'
import avatar from '../assets/Avatar.png'
import thumbsup from '../assets/thumbsup.png'
import thumbsdown from '../assets/thumbsdown.png'
import comments from '../assets/comments.png'
import refresh from '../assets/refresh.png'

const { Header, Footer, Content,Sider } = Layout;
const { TextArea } = Input;
const { Text, Title } = Typography;

const onChange = e => {
    console.log('Change:', e.target.value);
}


function Home() {
    const [collapsed, setCollapsed] = useState(false);

    const onFinish = (values) => {
        console.log('Success:', values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }
    
    return (
        <Layout  style={{
            minHeight: '100vh',
        }}>
            <Header 
            style={{ 
                backgroundColor: 'white',
                position: 'sticky',
                }} className='landing-header'>
                <Top />
            </Header>
           <Layout>
               <Sider 
                style={{
                    background: '#4F0DA3',
                }}
                 trigger={null} collapsible collapsed={collapsed}>
                     <div style={{
                         color: '#fff',
                         margin: '3% 40% 10% 40%',
                        fontSize: '25px',
                     }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </div>
                    <Menu
                        style={{
                            margin: '0 18%',
                            width: '70%',
                            backgroundColor: '#4F0DA3',
                            fontSize: '15px',
                        }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['4']}
                        items={[
                            {
                              key: '1',
                              icon: <HomeOutlined />,
                              label: 'Home',
                            },
                            {
                              key: '2',
                              icon: <ShopOutlined />,
                              label: 'Outlet',
                            },
                            {
                              key: '3',
                              icon: <UserOutlined />,
                              label: 'People',
                            },
                            {
                                key: '4',
                                icon: <MessageOutlined />,
                                label: 'Messages',
                            },
                            {
                                key: '5',
                                icon: <BellOutlined />,
                                label: 'Notification',
                            },
                        ]}
                    />
               </Sider>
               <Content
                    style={{
                    overflowX: 'hidden',
                    overflowY: 'auto',
                    height: '90vh',
                    }}
               >
                   <div
                    style={{
                        height: '70vh%',
                    }}
                   >
                        <div style={{ 
                   padding: 24,
                   backgroundColor: '#fff',
                   borderRadius: '5px',
                   width: '70%',
                   height: '40vh',
                   margin: '2% 30% 0 2%'
                   }}>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 1,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Text>Post on feed</Text>
                        <Form.Item
                            name="post"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your post!',
                                }
                            ]}
                        >
                            <TextArea
                                showCount
                                maxLength={1000}
                                style={{
                                    margin: '2% 0 0 0',
                                    height: '20vh',
                                    width: '99%',
                                    backgroundColor: 'rgba(196, 196, 196, 0.2)'
                                }}
                                onChange={onChange}
                                placeholder="Write up to 1000 words"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    backgroundColor: '#4F0DA3',
                                    border: 'none',
                                    outline: 'none',
                                    width: '20%',
                                    borderRadius: '5px'
                                }}
                            >Post</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div
                    style={{ 
                        padding: 24,
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        width: '70%',
                        height: '90vh',
                        margin: '2% 30% 0 2%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                   <div 
                    style={{
                        display: 'flex',

                    }}
                   >
                         <div style={{
                        margin: '4% 0 0 0',
                    }}>
                        <Avatar
                            src={avatar}
                            size={
                                50
                            }
                            style={{
                                borderRadius: '50%',
                                margin: '0 0'
                            }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            height: '8vh',
                            width: '100%',
                            justifyContent: 'space-between',
                            margin: '4% 0 0 1%',
                            borderBottom: '1px solid #E9E9E9',
                        }}
                    >
                        <Space 
                            style={{
                                lineHeight: '0.7vh',
                                margin: '1% 0 0 0',
                            }}
                            direction='vertical'>
                            <Text 
                                style={{
                                    fontWeight: '500',
                                }}>Dr. Salem Lawal</Text>
                            <Text
                                style={{
                                    fontSize: '10px',
                                }}
                                type="secondary">Pharmacist</Text>
                            <Text 
                                style={{
                                    fontSize: '10px',
                                }}
                                type="secondary">Lagos, Nigeria</Text>
                        </Space>
                        <div>
                            <Text>1hr ago</Text>
                        </div>
                    </div>
                   </div>
                    <div
                        style={{
                            width: '80%',   
                            margin: '2% 20% 0 10%',
                        }}
                    >
                        <Text >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec euismod, nisl eget consectetur sagittis, ipsum
                            nunc egestas nisi, eu aliquet nunc nisl eget
                            consectetur sagittis.
                        </Text>
                    </div>
                    <div 
                        style={{
                            width: '100%',
                            margin: '2% 0 0 0',
                        }}
                    >
                        <Image
                            src={post}
                            style={{
                                width: '600px',
                                height: '50vh',
                            }}
                        />
                    </div>
                    <div 
                        style={{
                            width: '25%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            margin: '2% 0 0 0',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                src={thumbsup}
                                size={20}
                            />
                            <Text
                                style={{
                                    fontSize: '10px',
                                }}
                            >3.2k</Text>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                src={comments}
                                size={20}
                            />
                            <Text
                                style={{
                                    fontSize: '10px',
                                }}
                            >115</Text>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                src={thumbsdown}
                                size={20}
                            />
                            <Text
                                style={{
                                    fontSize: '10px',
                                }}
                            >3</Text>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar
                                src={refresh}
                                size={20}
                            />
                            <Text
                                style={{
                                    fontSize: '10px',
                                }}
                            >1.3k</Text>
                        </div>
                    </div>
                </div>
                <div style={{ 
                   padding: 24,
                   backgroundColor: '#fff',
                   borderRadius: '5px',
                   width: '70%',
                   height: '20vh',
                   margin: '2% 30% 0 2%'
                   }}>
                    <Form
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                        name="basic"
                        labelCol={{
                            span: 1,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        
                        <Form.Item
                        style={{
                            width: '100%',
                        }}
                            name="post"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please add a comment!',
                                }
                            ]}
                        >
                            <Text>Comment</Text>
                            <Input
                                style={{
                                    margin: '2% 0 0 0',
                                    width: '99%',
                                    backgroundColor: 'rgba(196, 196, 196, 0.2)'
                                }}
                                placeholder="Your comment goes here"
                            />
                        </Form.Item>
                        <Form.Item
                            style={{
                                width: '20%',
                                margin: '1% 0 0 0',
                            }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{
                                    backgroundColor: '#4F0DA3',
                                    border: 'none',
                                    outline: 'none',
                                    width: '100%',
                                    borderRadius: '5px'
                                }}
                            >Post</Button>
                        </Form.Item>
                    </Form>
                </div>
                   </div>
               </Content>
               <Sider
                    style={{
                        background: '#f0f2f5',
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        height: '90vh'
                    }}
                    className="sidebar-right"
               >
                   <div
                    style={{
                        width: '100%',
                        height: '40vh',
                        background: '#4F0DA3',
                        margin: '5% 10% 0 0',
                        borderRadius: '10px',
                    }}
                   >

                   </div>
                   <div
                        style={{
                            width: '100%',
                            height: '20vh',
                            margin: '5% 10% 0 0',
                            borderRadius: '10px',
                            border: '1px solid grey',
                        }}
                   ></div>
                    <div
                         style={{
                            width: '100%',
                            height: '40vh',
                            margin: '5% 10% 0 0',
                            borderRadius: '10px',
                            border: '1px solid grey',
                        }}
                    ></div>
               </Sider>
           </Layout>
        </Layout>
    );
}

export default Home;