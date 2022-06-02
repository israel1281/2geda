import React from 'react'
import {
    Drawer,
    Button,
    Space
} from 'antd';

function Signin(props) {
  return (
    <Drawer
    placement="right"
    size={props.size}
    onClose={props.onCloseSignin}
    visible={props.signinVisible}
    extra={
      <Space>
        <Button 
          style={{ 
            height: '42px',
            borderRadius: '10px',
            width: '162px',
            border: 'none',
            marginLeft: '10px',
            backgroundColor: '#4F0DA3',
            color: 'white',
          }} className='' 
          type="primary" 
          size="default" 
          onClick={props.showSignupDrawer}
        >
          Sign Up
        </Button>
      </Space>
  }
>
    <p>Signin</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
</Drawer>
  )
}

export default Signin