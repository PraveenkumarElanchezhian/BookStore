import React from 'react';
import './Signup.scss'
import TextField from '@material-ui/core/TextField';

function Login() {
  return (
    <div className="signup-container">
        <div className="signup-Image-container">
          <div className="signup-Image">
          <img className="signup-Image-dimension" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1644370240_da39a3ee_b43dfffc5713010c64d0af51433118d1fc13ba79&api_key=CometServer1'/>
          </div>
        </div>

        <div className="signup">

          <div className="signup-section-1">
            <h1 className="signup-heading">LOGIN</h1>
            <h1 className="signup-headings">SIGNUP</h1>
          </div>

          <div className="signup-section-2">
            <TextField className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="FullName" variant="outlined"/>
            <TextField className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined" />
          </div>   

          <div className="signup-section-3">
            <TextField className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Password" variant="outlined"/>
            <TextField className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Mobile Number" variant="outlined" />
          </div>  

          <button className='login-btn' style={{ backgroundColor: '#A03037'}} > Signup </button>

        </div>
    </div>
  )
}

export default Login;



