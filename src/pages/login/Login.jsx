import React from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Component } from 'react';
import logo from '../../Images/logo.png';
import { Redirect } from "react-router-dom";
import UserService from '../../Service/UserService';
const service = new UserService();

export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openPage: true,
      loginemail: '',
      loginpassword: '',
      loginemailError: false,
      loginpasswordError: false,
      fullName: '',
      phone: '',
      email: '',
      password: '',
      fullNameError: false,
      phoneError: false,
      emailError: false,
      passwordError: false,
      redirect: null
    }
  }
  
  handleOpen = () => {
    this.setState({
      openPage: true,
    })
  }

  handleClose = () => {
    this.setState({
      openPage: false,
    })
  }

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginvalidation = () => {
    let isError = false;
    const error = this.state;
    error.loginemailError = this.state.loginemail === '' ? true : false;
    error.loginpasswordError = this.state.loginpassword === '' ? true : false;
    this.setState({
      ...error
    })

    return isError = error.loginemailError || error.loginpasswordError;

  }

  signupvalidation = () => {
    let isError = false;
    const error = this.state;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;
    error.fullNameError = this.state.fullName === '' ? true : false;
    error.phoneError = this.state.phone === '' ? true : false;

    this.setState({
      ...error
    })

    return isError = error.fullNameError || error.phoneError || error.emailError || error.passwordError;

  }

  login = () => {
    var validated = this.loginvalidation();
    if (!validated) {

      let data = {
        "email": this.state.loginemail,
        "password": this.state.loginpassword,
      }

      service.login(data)
        .then(res => {
          localStorage.setItem('token', res.data.result.accessToken)
          this.setState({
            redirect: "/dashboard"
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  Signup = () => {
    var validated = this.signupvalidation();
    if (!validated) {

      let data = {
        "fullName": this.state.fullName,
        "email": this.state.email,
        "password": this.state.password,
        "phone": this.state.phone
      }

      service.Signup(data)
        .then(res => {
          console.log(res);
          this.setState({
            redirect: "/login"
          })
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="login-container">
        <div className="Image-container">
          <div className="Image-left">
            <img className="Image-dimension" src={logo} alt='image logo' />
            <h4>ONLINE BOOK SHOPPING</h4>
          </div>
          <div className="Image-Right">

          </div>
        </div>
        {
          this.state.openPage ?
            <div className="login">

              <div className="section-1">
                <h1 className="heading" onClick={this.handleOpen}>LOGIN</h1>

                <h1 className="headings" onClick={this.handleClose}>SIGNUP</h1>
              </div>

              <div className="section-2">
                <TextField name="loginemail" className="email-box" type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.loginemailError} helperText={this.state.loginemailError ? "Enter a correct email" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="loginpassword" className="pass-box" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="password" variant="outlined" error={this.state.loginpasswordError} helperText={this.state.loginpasswordError ? "Enter a correct password" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <button className='login-button' style={{ backgroundColor: '#A03037' }} onClick={(event) => this.login(event)}> Login </button>

              <p className='strick'>-----------OR-----------</p>

              <div className='buttom-button'>
                <Button className='fb-button' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='google-button' variant="contained">Google</Button>
              </div>

            </div>
            :
            <div className="signup">

              <div className="signup-section-1">
                <h1 className="signup-heading" onClick={this.handleOpen}>LOGIN</h1>
                <h1 className="signup-headings" onClick={this.handleClose}>SIGNUP</h1>
              </div>

              <div className="signup-section-2">
                <TextField name="fullName" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="FullName" variant="outlined" error={this.state.fullNameError} helperText={this.state.fullNameError ? "Enter a fullname" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="email" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter an email" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <div className="signup-section-3">
                <TextField name="password" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="password" variant="outlined" error={this.state.passwordError} helperText={this.state.passwordError ? "Enter a password" : " "} onChange={(e) => this.changeHandle(e)} />
                <TextField name="phone" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Mobile Number" variant="outlined" error={this.state.phoneError} helperText={this.state.phoneError ? "Enter a mobile number" : " "} onChange={(e) => this.changeHandle(e)} />
              </div>

              <button className='login-btn' style={{ backgroundColor: '#A03037' }} onClick={(event) => this.Signup(event)}> Signup </button>

            </div>
        }
      </div>
    )
  }
}
export default Login;



