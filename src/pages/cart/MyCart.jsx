import React, { Component } from 'react'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './MyCart.scss';
import Header from '../header/Header';
import book1 from '../../Images/book1.png';

export class MyCart extends Component {
  render() {
    return (

      <div className='maincart-container'>
        <Header />
        <h3 className='heading'></h3>
        <div className='cart-container'>
          <h3 className='my-cart'>My Cart(2)</h3>
          return <div >
            <div className='content-container'>
              <div className='image-cart'><img src={book1} alt="image" style={{ height: "105px" }, { width: "100 px" }} /></div>
              <div className='cart-description'>
                <div className='book-nam'>bookName</div>
                <div className='author-nam'>author</div>
                <div className='pricetage'>bookPrice</div>
              </div>
            </div>
            <div className='update-cart'>
              <RemoveCircleOutlineOutlinedIcon htmlColor="grey" />
              <div className='cart-quantity'>books.quantity</div>
              <AddCircleOutlineOutlinedIcon htmlColor="grey" />
              <div className='remove' >Remove</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default MyCart