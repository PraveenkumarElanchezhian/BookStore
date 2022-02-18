import React from 'react'
import './Header.scss'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import  { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props) 
}

openMyCart=()=>{
   window.open("/myCart", "_self");
}
  render() {
    return (
      <div className="head-container">
            <div className="headbar">
                <div className="book-title">
                    <MenuBookOutlinedIcon style={{ color: 'white' }} />
                    <p className='cont1'> Bookstore</p>
                </div> 

                <div className="search-bar">
                    <input type='search' className='search' placeholder='Search...'></input>
                </div>

                <div className="right-icons">
                    <div className="user">
                        <PersonOutlinedIcon style={{ color: 'white' }}/>
                        <p id="user-name" > Praveen </p>
                    </div>
                    <div className="cart">
                        <ShoppingCartOutlinedIcon style={{ color: 'white' }} onClick={this.openMyCart}/>
                        <p id="cart-name" > cart </p>
                        <p>{this.props.parentToChild}</p>
                    </div>
                </div>

            </div>

        </div>
    )
  }
}

export default Header