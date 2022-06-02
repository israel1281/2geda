import React from 'react' 
import Logo from '../assets/2GEDA.png'
import { UserOutlined } from '@ant-design/icons';
import avatar from '../assets/Avatar.png'
import { 
    Input,
    Avatar,
    Image
   } from 'antd';


function Top(){
    return (
        <>
            <div className='logo'>
                <img src={Logo} width={47} alt='logo' />
            </div>
            <div className='landing-header-buttons'>
                <Input style={{ 
                    width: '60%',
                    margin: '0 0 0 30%',
                    height: '46px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0, 0, 0, 0.4)',
                    backgroundColor: 'white',
                    color: 'black',
                }} placeholder="Search Name, Place and Jobs" />
            </div>
            <div>
                <Avatar
                    src={
                        <Image
                            src={avatar}
                            size={{
                                xs: 32,
                                sm: 40,
                                md: 64,
                                lg: 64,
                                xl: 80,
                                xxl: 80
                            }}
                            style={{
                                borderRadius: '50%',
                                margin: '10px 0'
                            }}
                        />
                    }
                    size={{
                        xs: 24,
                        sm: 32,
                        md: 40,
                        lg: 64,
                        xl: 64,
                        xxl: 80
                    }}
                />
            </div>
        </>
    )
}

export default Top