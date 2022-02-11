import React from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Component } from 'react';
import UserService from '../../Service/UserService';
const service = new UserService();

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      openPage: true
    }
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOpen = () => {
    this.setState({
      openPage: false,
    })
  }

  handleClose = () => {
    this.setState({
      openPage: true,
    })
  }

  login=()=>{
    var validated = this.validation();
    if (!validated) {
      console.log("validation done");

      let data = {
        "email": this.state.email,
        "password": this.state.password,
      }

      service.login(data)
      .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err);
    })
    }
  }

  
  validation = () => {
    let isError = false;
    const error = this.state;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;

    this.setState({
      ...error
    })

    return isError = error.emailError || error.passwordError;

  }

  render() {
    return (
      <div className="login-container">
        <div className="Image-container">
          <div className="Image-left">
            <img className="Image-dimension" src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A7b0eeb81-a918-4f41-9bc2-f508474e79ce&params=version%3A0&token=1644370240_da39a3ee_b43dfffc5713010c64d0af51433118d1fc13ba79&api_key=CometServer1' />
            <h4>ONLINE BOOK SHOPPING</h4>
          </div>
          <div className="Image-Right">

          </div>
        </div>
        {
          this.state.openPage ?
            <div className="login"  /* onClick={this.handleOpen} */ >

              <div className="section-1">
                <h1 className="heading">LOGIN</h1>

                <h1 className="headings">SIGNUP</h1>
              </div>

              <div className="section-2">
                <TextField name="email" className="email-box" type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter a correct email" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="password" className="pass-box" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="password" variant="outlined" error={this.state.passwordError} helperText={this.state.passwordError ? "Enter a correct password" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <button className='login-button' style={{ backgroundColor: '#A03037' }} onClick={(event) => this.login(event)}> Login </button>

              <p className='strick'>-----------OR-----------</p>

              <div className='buttom-button'>
                <Button className='fb-button' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='google-button' variant="contained">Google</Button>
              </div>

            </div>
            :
            <div className="signup" /* onClick={this.handleClose} */ >  

              <div className="signup-section-1">
                <h1 className="signup-heading">LOGIN</h1>
                <h1 className="signup-headings">SIGNUP</h1>
              </div>

              <div className="signup-section-2">
                <TextField name="fullName" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="FullName" variant="outlined" error={this.state.fullNameError} helperText={this.state.emailError ? "Enter a fullname" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="email" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter an email" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <div className="signup-section-3">
                <TextField name="password" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="password" variant="outlined" error={this.state.passwordError} helperText={this.state.emailError ? "Enter a password" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="mobileNumber" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Mobile Number" variant="outlined" error={this.state.mobileNumberError} helperText={this.state.emailError ? "Enter a mobile number" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <button className='login-btn' style={{ backgroundColor: '#A03037' }} onClick={this.Signup}> Signup </button>

            </div>
        }
      </div>
    )
  }
}
export default Login;



