import React from 'react';
import './Login.scss'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

function Login() {
  return (
    <div className="login-container">
        <div className="Image-container">
          <div className="Image-left">
          <img className="Image-dimension" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1644370240_da39a3ee_b43dfffc5713010c64d0af51433118d1fc13ba79&api_key=CometServer1'/>
          <h4>ONLINE BOOK SHOPPING</h4>
          </div>
          <div className="Image-Right">
            
          </div>
        </div>

        <div className="login">

          <div className="section-1">
            <h1 className="heading">LOGIN</h1>
            <h1 className="headings">SIGNUP</h1>
          </div>

          <div className="section-2">
            <TextField className="email-box"  type='text' id="outlined-email" label="Email Id" variant="outlined"/>
            <TextField className="pass-box" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Password" variant="outlined" />
          </div>   

          <button className='login-button' style={{ backgroundColor: '#A03037'}} > Login </button>
          
          <p className='strick'>-----------OR-----------</p>

          <div className='buttom-button'>
            <Button className='fb-button' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
            <Button className='google-button' variant="contained">Google</Button>
          </div>

        </div>
    </div>
  )
}

export default Login;



