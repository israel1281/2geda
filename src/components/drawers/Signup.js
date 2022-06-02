import React from 'react'
import {
    Drawer,
    Button,
    Space,
    Col,
    Row,
    Typography
} from 'antd';
import Sign from '../../assets/sign.png'
import News from '../../assets/news.png'
import Chat from '../../assets/chat.png'
import Group from '../../assets/group.png'
import Shop from '../../assets/shop.png'
import Connection from '../../assets/connection.png'

const { Title, Text } = Typography;

function Signup(props) {

    const Grid = [
        { icon: [Sign], text: 'Become a Member by Creating a new account or sign-in as an existing user.' },
        { icon: [News], text: 'Stay updated on Post and News carefully Curated your you.' },
        { icon: [Chat], text: 'Chat Unlimited! Share images, videos, files in your conversation.' },
        { icon: [Group], text: 'Meet with People and Professionals in all sphere of Careers.' },
        { icon: [Shop], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted.' },
        { icon: [Connection], text: 'Outlet is your Marketplace. Buy and sell Goods at a touch. Services can also be posted' }
    ]

  return (
    <Drawer
        placement="right"
        size={props.size}
        onClose={props.onCloseSignup}
        visible={props.signupVisible}
        extra={
            <Space>
              <Button 
                style={{ 
                  height: '42px',
                  borderRadius: '10px',
                  border: '1px solid rgba(0, 0, 0, 0.4)',
                  width: '162px',
                  marginLeft: '10%',
                  backgroundColor: 'white',
                  color: 'black',
                }} className='' 
                type="primary" 
                size="default" 
                onClick={props.showSigninDrawer && props.onCloseSignup}
              >
                Sign in
              </Button>
            </Space>
        }
    >
   </Drawer>
  )
}

export default Signup