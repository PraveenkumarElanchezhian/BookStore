import React, { Component } from 'react';
import './Books.scss';
import book1 from '../../Images/book1.png';
import book2 from '../../Images/book2.png';
import book3 from '../../Images/book3.png';
import book5 from '../../Images/book5.png';
import book7 from '../../Images/book7.png';
import book8 from '../../Images/book8.png';
import book9 from '../../Images/book9.png';
import book10 from '../../Images/book10.png'
export class Books extends Component {
    render() {
        return (
            <div>
                <div className='grid-container'>
                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book1} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                    <div className='bottom-button'>
                                        <button className='button-left'>ADD TO BAG</button>
                                        <button className='button-right'>WISHLIST</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                            <img className="image" src={book2} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book3} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book5} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book7} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book8} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book9} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book10} alt='book image'/>
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>Don't Make Me Think</span>
                                    <span id='title2'>by Steve Krug</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>1500</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Books