import React from 'react';
import './Signup.scss'
import TextField from '@material-ui/core/TextField';


import { Component } from 'react';

export class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      EmailId: '',
      Password: '',
      mobileNumber: '',
      fullNameError: '',
      EmailIdError: '',
      PasswordError: '',
      mobileNumberError: ''
    }
  }

  validation = () => {
    let isError = false;
    const error = this.state;
    error.fullNameError = this.state.fullName === '' ? true : false;
    error.EmailIdError = this.state.EmailId === '' ? true : false;
    error.PasswordError = this.state.Password === '' ? true : false;
    error.mobileNumberError = this.state.mobileNumber === '' ? true : false;

    this.setState({
      ...error
    })

    return isError = error.fullNameError || error.EmailIdError || error.PasswordError || error.mobileNumberError ;

  }

  Signup = () => {
    var validated = this.validation();
    if (validated) {
      console.log("validation done")
    }
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="signup-container">
        <div className="signup-Image-container">
          <div className="signup-Image">
            <img className="signup-Image-dimension" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1644370240_da39a3ee_b43dfffc5713010c64d0af51433118d1fc13ba79&api_key=CometServer1' />
            <h4>ONLINE BOOK SHOPPING</h4>
          </div>
          <div className='signup-Image-Right'></div>
        </div>

        <div className="signup">

          <div className="signup-section-1">
            <h1 className="signup-heading">LOGIN</h1>
            <h1 className="signup-headings">SIGNUP</h1>
          </div>

          <div className="signup-section-2">
            <TextField name="fullName" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="FullName" variant="outlined" error={this.state.fullNameError} helperText={this.state.EmailIdError ? "Enter a fullname" : " "} onChange={(e) => this.changeHandle(e)}/>
            <TextField name="EmailId" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.EmailIdError} helperText={this.state.EmailIdError ? "Enter an email" : " "} onChange={(e) => this.changeHandle(e)}/>
          </div>

          <div className="signup-section-3">
            <TextField name="Password" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Password" variant="outlined" error={this.state.PasswordError} helperText={this.state.EmailIdError ? "Enter a password" : " "} onChange={(e) => this.changeHandle(e)}/>
            <TextField name="mobileNumber" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Mobile Number" variant="outlined" error={this.state.mobileNumberError} helperText={this.state.EmailIdError ? "Enter a mobile number" : " "} onChange={(e) => this.changeHandle(e)}/>
          </div>

          <button className='login-btn' style={{ backgroundColor: '#A03037' }} onClick={this.Signup}> Signup </button>

        </div>
      </div>
    )
  }
}
export default Signup;



