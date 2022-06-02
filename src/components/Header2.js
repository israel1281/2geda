import React from 'react'
import './Header2.css'
import { 
    Col, 
    Row,
    Avatar,
    Button
} from 'antd'
import AuthMenu from './dropdowns/AuthMenu'

import Logo from '../assets/2GEDA.png'

function Header2(props) {
  return (
    <Row style={{
        alignItems: 'center',
        height: '64px',
        backgroundColor: 'white',
        position: 'sticky',
    }}>
        <Col
            style={{
                alignItems: 'center',
            }}
            xs={4} sm={4} md={8} lg={10} xl={12}>
            <Avatar
                style={{
                marginLeft: '10%',
                }}
                src={Logo}
                size={{
                    xs: 50,
                    sm: 32,
                    md: 50,
                    lg: 50,
                    xl: 50,
                    xxl: 50,
                }}
            />
        </Col>  
        <Col
        style={{
            alignItems: 'center',
        }}
        xs={20} sm={20} md={16} lg={14} xl={12}>
            <div className='header2-button'>
                <Button style={{ 
                    height: '42px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.4)',
                    width: '162px',
                    marginLeft: '30%',
                    backgroundColor: 'white',
                    color: 'black',
                }} 
                className='header2-button-1' 
                type="primary" 
                size="default" 
                onClick={props.showSigninDrawer}>
                    Sign in
                </Button>
                <Button style={{
                        height: '42px',
                        borderRadius: '10px',
                        width: '162px',
                        border: 'none',
                        marginLeft: '10px',
                        backgroundColor: '#4F0DA3',
                        color: 'white',
                }} 
                className='header2-button-2' 
                type="primary" size="default" 
                onClick={props.showSignupDrawer}>
                    Get Started
                </Button>
            </div>
            <div className='auth-menu'>
                <AuthMenu
                    showSigninDrawer={props.showSigninDrawer}
                    showSignupDrawer={props.showSignupDrawer}
                />
            </div>
        </Col>
    </Row>
  )
}

export default Header2