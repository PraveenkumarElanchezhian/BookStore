import React, { Component } from 'react'
import Header from '../header/Header';
import book1 from '../../Images/book1.png';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Wishlist.scss';
import Footer from '../footer/Footer';
import UserService from '../../Service/UserService';
import { Redirect } from "react-router-dom";
const service = new UserService();

export class Wishlist extends Component {
  constructor(props) {
    super(props)

    this.state = {
      myWishlistArray: [],
      redirect:null
    }
  }

  componentDidMount() {
    this.getmyWishlist();
  }

  getmyWishlist = () => {
    service.getWishlist()
      .then(res => {
        console.log(res);
        this.setState({
          myWishlistArray: res.data.result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  removeWishlistItems = (item) => {
    console.log(item);
    service.deleteWishlist(item)
      .then(res => {
        console.log(res);
        this.getmyWishlist();
      })
      .catch(err => {
        console.log(err);
      })
  }

  addCart =(item)=>{
    let data = {
      "product_id": item,
  }
  service.addCart(data)
      .then(res => {
          console.log(res);
          this.setState ({
            redirect: "/myCart"
        })
      })
      .catch(err => {
          console.log(err);
      })
     
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='wishlist-container'>
        <Header wishlistCount={this.state.myWishlistArray.length} />
        <div className='wish_list'>
          <div className='wishlist'>
            <div className='button'>
              <button className='button_style'>Home</button>
              <h6>/</h6>
              <button className='button_style'>My Wishlist</button>
            </div>
            <div className='my-cart'>
              <h3>My Wishlist ({this.state.myWishlistArray.length})</h3>
            </div>
          </div>
          {this.state.myWishlistArray.map((item, index) => (
            <div className='wishlist_summary'>
              <div >
                <div className='content-container'>
                  <img className='image_style' src={book1} alt="image" />
                  <div className='cart-description'>
                    <div className='bookname'>{item.product_id.bookName}</div>
                    <div className='authorname'>{item.product_id.author}</div>
                    <div className='bookprice'>Rs. {item.product_id.price}</div>
                  </div>
                  <div className='icons'>
                    <ShoppingCartOutlinedIcon onClick={() => this.addCart(item.product_id._id)}/>
                    <DeleteOutlinedIcon onClick={() => this.removeWishlistItems(item.product_id._id)} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Wishlist