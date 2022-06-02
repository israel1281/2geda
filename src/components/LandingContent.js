import React, { useState } from 'react'
import './LandingContent.css'
import { 
    Avatar, 
    Button, 
    Col, 
    Row,
    Typography
 } from 'antd'
 import Signup from './drawers/Signup'
 import Signin from './drawers/Signin'
import authback from '../assets/authback.png'
import logo2 from '../assets/2GEDA (2).png'
import Sign from '../assets/sign.png'
import News from '../assets/news.png'
import Chat from '../assets/chat.png'
import Group from '../assets/group.png'
import Shop from '../assets/shop.png'
import Connection from '../assets/connection.png'

const { Title, Text } = Typography

export const Grid = [
    { icon: [Sign], text: 'Become a Member by Creating a new account or sign-in as an existing user.' },
    { icon: [News], text: 'Stay updated on Post and News carefully Curated your you.' },
    { icon: [Chat], text: 'Chat Unlimited! Share images, videos, files in your conversation.' },
    { icon: [Group], text: 'Meet with People and Professionals in all sphere of Careers.' },
    { icon: [Shop], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted.' },
    { icon: [Connection], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted' }
]

function LandingContent(props) {



  return (
    <Row
        style={{
            height: '100vh',
            backgroundImage: `url(${authback})`,
        }}
    >
        <Col
        style={{
            alignItems: 'center',
        }}
        xs={24} sm={4} md={12} lg={12} xl={12}>
            <Avatar
            style={{
                margin: '15% 0 0 10%',
            }}
                src={logo2}
                size={{
                    xs: 80,
                    sm: 32,
                    md: 40,
                    lg: 50,
                    xl: 90,
                    xxl: 100,
                }}
            />

            <Title
                style={{
                    margin: '3% 0 0 10%',
                    color: 'white',
                    width: '70%',
                }}
            >
                Unlock Business directories
                and Personal Potentials
            </Title>

            <Title
            style={{
                margin: '5% 0 0 10%',
                color: '#c6c3c3',
                width: '40%',
            }}
            level={5}
            >
                Meet prospective clients and vendors
                for your next product or service
                needs
            </Title>

            <Button style={{ 
                height: '42px',
                borderRadius: '10px',
                border: 'none',
                width: '192px',
                margin: '5% 0 0 10%',
                backgroundColor: '#FF4E02',
                color: 'white',
            }} className='' type="primary" size="default" onClick={props.showSignupDrawer}>
                Get Started
            </Button>
        </Col>
        <Col
        style={{
            alignItems: 'center',
        }}
        xs={24} sm={4} md={12} lg={12} xl={12}>
            <div className='landingcontent-grid'>
            <div
                style={{
                    width: '90%',
                    height: '70vh',
                    backgroundColor: 'white',
                    margin: '15% 0 0 0',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Row 
                    style={{
                        width: '80%',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        borderRadius: '10px',
                        padding: '28px'
                    }}
                gutter={[8, 8]}>
                    <div className='landingcontent-grid-title'>
                        <div
                            style={{
                                position: 'absolute',
                                backgroundColor: '#5897DD',
                                width: '40%',
                                borderRadius: '5px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '-6% 20% 0 12%',
                            }}
                        >
                            <Title
                                level={5}
                                style={{
                                    color: 'white',
                                }}
                            >All Features 2geda right here</Title>
                        </div>
                    </div>
                {
                        Grid.map(item => (
                        <Col 
                        xs={{ span: 12}} 
                        sm={{ span: 12}}
                        md={{ span: 12}}
                        lg={{ span: 8}}
                        xl ={{ span: 7}} style={{
                            width: '20%',
                            height: '20vh',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <img src={item.icon} width={40} alt='logo' />
                            <Text
                            style={{
                                width: '90%',
                                fontSize: '10px',
                                marginTop: '10%'
                            }}
                            >{item.text}</Text>
                        </Col>
                    ))
                }
                <Signup
                    signupVisible={props.signupVisible}
                    size={props.size}
                    onCloseSignup={props.onCloseSignup}
                    showSigninDrawer={props.showSigninDrawer}
                />
                <Signin
                    signinVisible={props.signinVisible}
                    size={props.size}
                    onCloseSignin={props.onCloseSignin}
                    showSignupDrawer={props.showSignupDrawer}
                />
                </Row>
            </div>
            </div>
        </Col>
    </Row>
  )
}

export default LandingContent