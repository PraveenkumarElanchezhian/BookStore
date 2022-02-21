import React from 'react'
import './Header.scss'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import  { Component } from 'react'

//badge icons
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

//

export class Header extends Component {
  constructor(props) {
    super(props) 
}

openMyCart=()=>{
   window.open("/myCart", "_self");
}

openMyWishlist=()=>{
    window.open("/wishlist", "_self");
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
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={this.props.parentToChild} color="secondary">
                        <ShoppingCartIcon style={{ color: 'white' }} onClick={this.openMyCart}/>
                        </StyledBadge>
                    </IconButton>
                        {/* <ShoppingCartOutlinedIcon style={{ color: 'white' }} onClick={this.openMyCart} />
                        <p id="cart-name" > cart </p>
                        <p>{this.props.parentToChild}</p> */}
                    </div>

                   
                    <div className="wishlist">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={this.props.wishlistCount} color="secondary">
                        <FavoriteBorderOutlinedIcon style={{ color: 'white' }} onClick={this.openMyWishlist}/>
                        </StyledBadge>
                    </IconButton>
                        {/* <FavoriteBorderOutlinedIcon style={{ color: 'white' }}/>
                        <p id="wishlist-name" > Wishlist </p> */}
                    </div>
                </div>

            </div>

        </div>
    )
  }
}

export default Header