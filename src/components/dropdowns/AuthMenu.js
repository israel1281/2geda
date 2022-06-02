import React from 'react'
import './AuthMenu.css'
import {
    Menu,
    Dropdown,
    Typography
} from 'antd'

import { MenuOutlined } from '@ant-design/icons'

const { Text } = Typography

const AuthMenu = (props) => {

    const handleMenuClick = (e) => {
        if (e.key === '1') {
            props.showSigninDrawer()
        } else if (e.key === '2') {
            props.showSignupDrawer()
        }
    }
    
    return (
        <Dropdown
            overlay={
                <Menu onClick={handleMenuClick}>
                    <Menu.Item key="1">
                        <Text>Sign in</Text>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Text>Sign up</Text>
                    </Menu.Item>
                </Menu>
            }
            trigger={['click']}
            className='auth-menu'
        >
            <MenuOutlined />
        </Dropdown>
    )
}

export default AuthMenu
