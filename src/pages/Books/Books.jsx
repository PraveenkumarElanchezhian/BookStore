import React, { Component } from 'react';
import './Books.scss';
import book2 from '../../Images/book2.png';
import UserService from '../../Service/UserService';
const service = new UserService();

export class Books extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booklistArray: []
        }
        this.getbooklist();
    }

    getbooklist = () => {
        service.getBook()
            .then(res => {
                this.setState({
                    booklistArray: res.data.result
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <div className='body'>
                 {this.state.booklistArray.map((item, index) => (
                <div className='grid-container'>
                    <div className="main-card">
                        <div className='card' className='displayGrid' >
                            <div className="book-container">
                                <img className="image" src={book2} alt='book image' />
                            </div>
                            <div className="text-containt">
                                <div className="title">
                                    <span id='title1'>{item.bookName}</span>
                                    <span id='title2'>{item.author}</span>
                                    {/* <div className="rating">
                                        <span id='number1'>4.5*</span>
                                        <span id='number2'>(20)</span>
                                    </div> */}
                                    <div className="price-container">
                                        <span id='rs'>Rs.</span>
                                        <span id='new-price'>{item.price}</span>
                                        {/* <span id='old-price'></span> */}
                                    </div>
                                    <div className='bottom-button'>
                                        <button className='button-left' onClick={(event) => this.getbooklist(event)}>ADD TO BAG</button>
                                        <button className='button-right'>WISHLIST</button>
                                        {/* <button className='button'>ADDED TO BAG</button>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 ))}
            </div>

        )
    }
}

export default Books