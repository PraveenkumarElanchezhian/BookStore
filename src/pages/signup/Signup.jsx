import React from 'react';
import './Signup.scss'
import TextField from '@material-ui/core/TextField';
import { Component } from 'react';
import logo from '../../Images/logo.png';
import UserService from '../../Service/UserService';
const service = new UserService();

export class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fullName: '',
      email: '',
      password: '',
      phone: '',
      fullNameError: '',
      emailError: '',
      passwordError: '',
      phoneError: ''
    }
  }

  validation = () => {
    let isError = false;
    const error = this.state;
    error.fullNameError = this.state.fullName === '' ? true : false;
    error.emailError = this.state.email === '' ? true : false;
    error.passwordError = this.state.password === '' ? true : false;
    error.phoneError = this.state.phone === '' ? true : false;

    this.setState({
      ...error
    })

    return isError = error.fullNameError || error.emailError || error.passwordError || error.phoneError;

  }

  Signup = () => {
    var validated = this.validation();
    if (!validated) {
      console.log("validation done")

      let data = {
        "fullName": this.state.fullName,
        "email": this.state.email,
        "password": this.state.password,
        "phone": this.state.phone
      }

      service.Signup(data)
        .then(res => {
          console.log(res);
          window.open("/login", "_self");
        })
        .catch(err => {
          console.log(err);
        })
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
            <img className="signup-Image-dimension" src={logo} alt='image logo' />
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
            <TextField name="fullName" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="fullName" variant="outlined" error={this.state.fullNameError} helperText={this.state.emailError ? "Enter a fullName" : " "} onChange={(e) => this.changeHandle(e)} />
            <TextField name="email" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined" error={this.state.emailError} helperText={this.state.emailError ? "Enter an email" : " "} onChange={(e) => this.changeHandle(e)} />
          </div>

          <div className="signup-section-3">
            <TextField name="password" className="email-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="password" variant="outlined" error={this.state.passwordError} helperText={this.state.emailError ? "Enter a password" : " "} onChange={(e) => this.changeHandle(e)} />
            <TextField name="phone" className="pass-npt" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Mobile Number" variant="outlined" error={this.state.phoneError} helperText={this.state.emailError ? "Enter a mobile number" : " "} onChange={(e) => this.changeHandle(e)} />
          </div>

          <button className='login-btn' style={{ backgroundColor: '#A03037' }} onClick={(event) => this.Signup(event)}> Signup </button>

        </div>
      </div>
    )
  }
}
export default Signup;



