import React, { Component } from 'react'
import Header from '../header/Header';
import book1 from '../../Images/book1.png';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Wishlist.scss';
import Footer from '../footer/Footer';
export class Wishlist extends Component {
    render() {
        return (
            <div className=''>
                <Header />
                <div className='button'>
                    <button className='button_style'>Home</button>
                    <h6>/</h6>
                    <button className='button_style'>My Wishlist</button>
                </div>
                <div className='my-cart'>
                    <h3>My Wishlist (02)</h3>
                    </div>
                <div className='wishlist_summary'>
                    <div >
                        <div className='content-container'>
                            <img className='image_style' src={book1} alt="image" />
                            <div className='cart-description'>
                                <div className='bookname'>Don't Make Me Think</div>
                                <div className='authorname'>by Steve Krug</div>
                                <div className='bookprice'>Rs. 1500</div>
                            </div>
                            <div className='icons'>
                                <ShoppingCartOutlinedIcon />
                                <DeleteOutlinedIcon />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Wishlist