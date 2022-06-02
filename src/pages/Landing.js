import React, { useState } from 'react'
import { Row, Col } from 'antd'
import Header2 from '../components/Header2'
import LandingContent from '../components/LandingContent'

function Landing() {
  
  const [signinVisible, setSigninVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);
  const [size, setSize] = useState();

  const showSigninDrawer = () => {
    setSize('large');
    setSigninVisible(true);
  };

 const showSignupDrawer = () => {
  setSize('large');
  setSignupVisible(true);
 };

  const onCloseSignup = () => {
    setSignupVisible(false)
  };

  const onCloseSignin = () => {
    setSigninVisible(false)
  };


  return (
    <Col>
      <Header2
        showSigninDrawer={showSigninDrawer}
        showSignupDrawer={showSignupDrawer}
      />
      <LandingContent
        signinVisible={signinVisible}
        signupVisible={signupVisible}
        size={size}
        onCloseSignup={onCloseSignup}
        onCloseSignin={onCloseSignin}
        showSignupDrawer={showSignupDrawer}
      />
    </Col>
  )
}

export default Landing