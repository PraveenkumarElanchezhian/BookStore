import React from 'react'
import './Header.scss'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import SearchIcon from '@mui/icons-material/Search';
import { styled, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';

// const Search = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(3),
//       width: 'auto',
//     },
//   }));
  
//   const SearchIconWrapper = styled('div')(({ theme }) => ({
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }));
  
//   const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }));

import  { Component } from 'react'

export class Header extends Component {
  constructor(props) {
    super(props)
   console.log(this.props.parentToChild);
   
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
                    {/* <Search style={{ width: '100%', background: 'transparent', marginLeft: '30%', color:'#fff', border:'1px solid #fff' }}>
                        <SearchIconWrapper> <SearchIcon /> </SearchIconWrapper>
                        <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                    </Search> */}
                </div>

                <div className="right-icons">
                    <div className="cart">
                        <p id="cart-name"> cart </p>
                        <ShoppingCartOutlinedIcon style={{ color: 'white' }} />
                        <p>{this.props.parentToChild}</p>
                    </div>
                </div>

            </div>

        </div>
    )
  }
}

export default Header