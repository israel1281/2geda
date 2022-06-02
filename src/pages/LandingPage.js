import React, { useState } from 'react'
import './LandingPage.css'
import Register from '../components/modals/Register';
import useSigninModal from '../components/modals/useSigninModal';
import Signin from '../components/modals/Signin';
import {
     Layout, 
     Button,
    } from 'antd';
import Logo from '../assets/2GEDA.png'
import Logo2 from '../assets/2GEDA (2).png'
import Logo3 from '../assets/Ellipse 3.png'
import Logo4 from '../assets/Ellipse 4.png'
import Logo5 from '../assets/Ellipse 5.png'
import Chat from '../assets/chat.png'
import Connection from '../assets/connection.png'
import Group from '../assets/group.png'
import News from '../assets/news.png'
import Shop from '../assets/shop.png'
import Sign from '../assets/sign.png'


const { Header, Footer, Content } = Layout;



function LandingPage() {
    const [register, setRegister] = useState(false);
    const [show, setShow] = useState(false);
    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    const isShow =  () => setShow(false)

    const grid = [
        { icon: [Sign], text: 'Become a Member by Creating a new account or sign-in as an existing user.' },
        { icon: [News], text: 'Stay updated on Post and News carefully Curated your you.' },
        { icon: [Chat], text: 'Chat Unlimited! Share images, videos, files in your conversation.' },
        { icon: [Group], text: 'Meet with People and Professionals in all sphere of Careers.' },
        { icon: [Shop], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted.' },
        { icon: [Connection], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted' }
    ]
    

  return (
        <Layout>
            <Header style={{ backgroundColor: 'white'}} className='landing-header'>
                <div className='logo'>
                    <img src={Logo} width={47} alt='logo' />
                </div>
                <div className='landing-header-buttons'>
                   <Button style={{ 
                        height: '46px',
                        borderRadius: '10px',
                        border: '1px solid rgba(0, 0, 0, 0.4)',
                        backgroundColor: 'white',
                        color: 'black',
                    }} className='l-sign-in' type="primary" size="default" onClick={openModal} data-toggle="modal" data-target="#myModal">
                        Sign in
                    </Button>
                    <Button style={{
                         height: '46px',
                         borderRadius: '10px',
                         border: 'none',
                         backgroundColor: '#4F0DA3',
                         color: 'white',
                    }} className='l-get-started' type="primary" size="default" data-toggle="modal" data-target="#register">
                        Get Started
                    </Button>
                </div>
            </Header>
            <Content className='landing-content'>
                <div className='landing-content-1'>
                    <h2>Unlock Business and Personal</h2>
                    <h3>Potentials</h3>
                    <h6>Meet prospective clients and vendors for your next product</h6>
                    <h5>or service needs</h5>
                    <div className='landing-content-1-buttons'>
                        <Button style={{
                            height: '46px',
                            borderRadius: '10px',
                            border: 'none',
                            backgroundColor: '#4F0DA3',
                            color: 'white',
                        }} className='c-1-button1' type="primary" size="default"  onClick={() => setRegister(true)}>Open an account</Button>
                        <Button style={{
                             height: '46px',
                             borderRadius: '10px',
                             border: '1px solid rgba(0, 0, 0, 0.4)',
                             backgroundColor: 'white',
                             color: 'black',
                        }} className='c-1-button2' type="primary" size="default" onClick={openModal}>Sign in</Button>
                    </div>
                    <Register />
                    <Signin />
                   </div>
                <div className='landing-content-2'>
                    <div className='landing-content-2-grid'>
                        <div style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            width: '280px',
                            position: 'absolute',
                            marginTop: '-1150px'
                        }}>
                            <img src={Logo3} width={80} alt='logo' />
                            <img src={Logo4} width={80} alt='logo' />
                            <img src={Logo5} width={80} alt='logo' />
                        </div>
                        <div style={{
                            width: '581px',
                            height: '62px',
                            background: '#B469EF',
                            borderRadius: '10px',
                            fontSize: '25px',
                            color: 'white',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '-150px'
                        }}>
                            <h4 style={{ margin: '3% 5% 5% 30%'}}>All Features 2geda right here</h4>
                        </div>
                        <div className='grid-content'>
                           {
                                 grid.map(item => (
                                    <div style={{
                                        width: '274px',
                                        height: '322px',
                                        border: '10px solid rgba(40, 40, 40, 0.02)',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <img src={item.icon} width={100} alt='logo' />
                                        <h6>{item.text}</h6>
                                    </div>
                                ))
                           }
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={{
                backgroundColor: '#201F1F',
            }} className='landing-footer'>
                <div className="footer-logo">
                    <img src={Logo2} width={70} alt='logo' />
                </div>
            </Footer>
        </Layout>
  )
}

export default LandingPage