import React from 'react'
import './Header.scss'
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import  { Component } from 'react'
import { Redirect } from "react-router-dom";

//badge icons
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
    this.searchItemsHandle = this.searchHandler.bind(this, 'searchitems');
    this.state = {
        redirect:null,
    }
}

openMyCart=()=>{
    this.setState ({
        redirect: "/myCart"
    })
}

openMyWishlist=()=>{
    this.setState ({
        redirect: "/wishlist"
    })
 }

 searchHandler(refName, e) {
    this.props.searchbookItems(e.target.value)
}

  render() {
    if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
      }
    return (
      <div className="head-container">
            <div className="headbar">
                <div className="book-title">
                    <MenuBookOutlinedIcon style={{ color: 'white' }} />
                    <p className='cont1'> Bookstore</p>
                </div> 

                <div className="search-bar">
                    <input type='search' className='search' placeholder='Search...' onKeyUp={this.searchItemsHandle} ref="searchitems"></input>
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
                    </div>

                   
                    <div className="wishlist">
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={this.props.wishlistCount} color="secondary">
                        <FavoriteBorderOutlinedIcon style={{ color: 'white' }} onClick={this.openMyWishlist}/>
                        </StyledBadge>
                    </IconButton>
                    </div>

                    <div className='exitIcon'>
                    <ExitToAppIcon style={{ color: 'white', }}/>
                    </div>
                </div>

            </div>

        </div>
    )
  }
}

export default Header