import React, { Component } from 'react';
import './Books.scss';
import book2 from '../../Images/book2.png';
import UserService from '../../Service/UserService';
import { display } from '@mui/system';
const service = new UserService();

export class Books extends Component {
    constructor(props) {
        super(props)

        this.state = {
            booklistArray: [],
            addedtoBag: [],
            addedtoWishlist: [],
            tempbooklistArray:[]
        }
        console.log(this.props.parentToChild );
    }

    componentDidMount(){
        this.getbooklist();
    }

    addBooktoCart = (item) => {
        let data = {
            "product_id": item,

        }
        service.addCart(data)
            .then(res => {
                let result = this.state.booklistArray.find(i => i._id == item)
                this.state.addedtoBag.push(result)
                this.props.childToParent(this.state.addedtoBag)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    addBooktoWishlist = (item) =>{

        let data = {
            "product_id": item,
        }
        service.addWishlist(data)
            .then(res => {
                let result = this.state.booklistArray.find(i => i._id == item)
                this.state.addedtoWishlist.push(result)
                this.props.wishlistCount(this.state.addedtoWishlist)
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    getbooklist = () => {
        service.getBook()
            .then(res => {
                this.setState({
                    booklistArray: res.data.result,
                    tempbooklistArray: res.data.result
                })
                // console.log(this.state.booklistArray);
            })
            .catch(err => {
                console.log(err);
            })
    }
    itemisExists = (data) => {
        let addtocart = this.state.addedtoBag.some(item => data._id === item._id)
        return addtocart

    }

    itemisWishlist = (data) => {
        let addtowishlist = this.state.addedtoWishlist.some(item => data._id === item._id)
        return addtowishlist
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    getAlert=(item) =>{
        let val = item.toLowerCase();
        this.state.booklistArray = this.state.tempbooklistArray
        console.log( this.state.booklistArray);
        let matches = this.state.booklistArray.filter(v => v.bookName.toLowerCase().includes(val));
        this.state.booklistArray=matches
        console.log( this.state.booklistArray);
      }

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
                                        <div className='buttonsq'>
                                            <div style={{width:'50%'}}>
                                                {this.itemisExists(item) == false ?
                                                    <div className='bottom-button'>
                                                        <button className='button-left' value={item._id} onClick={(event) => this.addBooktoCart(event.target.value)}>ADD TO BAG</button>
                                                        {/* <button className='button-right'>WISHLIST</button> */}
                                                    </div>
                                                    :
                                                    <button className='add_button'>ADDED TO BAG</button>
                                            }
                                            </div>

                                            <div style={{width:'50%'}}>
                                                {this.itemisWishlist(item) == false ?
                                                    <div className='bottom-button'>
                                                        {/* <button className='button-left' >ADD TO BAG</button> */}
                                                        <button className='button-right' value={item._id} onClick={(event) => this.addBooktoWishlist(event.target.value)}>WISHLIST</button>
                                                    </div>
                                                    :
                                                    <button className='add_button'>WISHLIST</button>
                                            }
                                            </div>
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