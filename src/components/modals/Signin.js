import React from 'react'
import './Signin.css'
import Layout from 'antd/lib/layout/layout'
import Logo2 from '../../assets/2GEDA (2).png'
import Download from '../../assets/download 1.png'

const { Header, Sider, Content } = Layout;

function Signin() {
  return (
    <div class="modal fade" id="myModal">
        <div style={{ marginTop: '50px'}} class="modal-dialog modal-lg">
            <div class="modal-content">
                <div style={{  backgroundImage: 'linear-gradient(#B469EF, #4F0DA3)'}} class="modal-header">
                    <img style={{ 
                        marginLeft: '50px',
                        width: '72px',
                        }} src={Logo2} width={47} alt='logo' />
                    <h4 style={{
                        color: 'white',
                        margin: '20px 200px 20px 0px',
                        fontSize: '20px',
                    }}>Welcome Back, let’s come 2geda</h4>
                </div>
                <div class='modal-body'>
                    <div>
                        <img style={{
                            width: '269px',
                            height: '423px',
                        }} src={Download} alt='logo' />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Signin