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
import UserService from '../../Service/UserService';
const service = new UserService();

export class MyCart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      opencustomerpage: false,
      openOrderpage: false,
      mycartArray: [],
      quantity: 1,
      show: true,
      min: 0,
      fullName: '',
      phonenumber: '',
      pincode: '',
      locality: '',
      fullAddress: '',
      city: '',
      landmark: '',
      product_id: '',
      product_name: '',
      product_quantity: '',
      product_price: '',
      orders: []

    }
  }

  IncrementItem = (item) => {
    this.setState(prevState => {
      if (prevState.quantity < 9) {
        return {
          quantity: prevState.quantity + 1
        }
      } else {
        return null;
      }
    });
    let data = {
      "quantityToBuy": this.state.quantity + 1
    }
    this.updateCartItems(item._id, data)
  }

  updateCartItems = (_id, data) => {
    service.updateCart(_id, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  DecreaseItem = (item) => {
    this.setState(prevState => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1,
        }
      } else {
        return null;
      }
    });
    let data = {
      "quantityToBuy": this.state.quantity - 1
    }
    this.updateCartItems(item._id, data)
  }

  handleChange = (event) => {
    this.setState({ quantity: event.target.value });
    service.updateCart()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getmycartlist();
  }

  getmycartlist = () => {
    service.getCart()
      .then(res => {
        console.log(res);
        this.setState({
          mycartArray: res.data.result
        })
        console.log(this.state.mycartArray);
      })
      .catch(err => {
        console.log(err);
      })
  }


  checkout = () => {
    localStorage.setItem('_phonenumber', this.state.phonenumber)
    localStorage.setItem('_fullAddress', this.state.fullAddress)
    let array = [];
    this.state.mycartArray.map((item) => {
      let book_Order = {
        product_id: item.product_id._id,
        product_name: item.product_id.bookName,
        product_quantity: item.quantityToBuy,
        product_price: item.product_id.price,
      };
      return array.push(book_Order);
    });
    let data = {
      orders: array,
    };
    service.addOrder(data)
      .then(res => {
        console.log(res);
        this.getmycartlist();
      })
      .catch(err => {
        console.log(err);
      })
  }

  openCustomerDetails = () => {
    this.setState({
      opencustomerpage: true
    })
  }

  openOrderDetails = () => {
    this.setState({
      openOrderpage: true
    })
  }

  removeCartItems = (item) => {
    console.log(item);
    service.deleteCart(item)
      .then(res => {
        console.log(res);
        this.getmycartlist();
      })
      .catch(err => {
        console.log(err);
      })
  }

  changefield = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  Continue = () => {
    let data = {
      "addressType": "Home",
      // "fullName": this.state.fullName,
      // "phonenumber": this.state.phonenumber,
      // "pincode": this.state.pincode,
      // "locality": this.state.locality,
      "fullAddress": this.state.fullAddress,
      "city": this.state.city,
      "state": this.state.landmark
    }
    service.customerDetails(data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    this.setState({
      openOrderpage: true
    })

  }

  render() {
    return (

      <div className='carts-container'>
        <Header parentToChild={this.state.mycartArray.length}/>
        <h3 className='heading'></h3>
        <div className='carts'>
          <h3 className='mycart'>My Cart({this.state.mycartArray.length})</h3>
          {this.state.mycartArray.map((item, index) => (
            <div>
              <div className='content-container'>
                <img className='image_style' src={book1} alt="image" />
                <div className='cart-description'>
                  <div className='bookname'>{item.product_id.bookName}</div>
                  <div className='authorname'>{item.product_id.author}</div>
                  <div className='bookprice'>Rs. {item.product_id.price}</div>
                </div>
              </div>
              <div className='update-cart'>
                <div className='empty'></div>
                <div className='cart_right'>
                  <div className='left'>
                    <RemoveCircleOutlineOutlinedIcon htmlColor="lightgray" onClick={() => this.DecreaseItem(item)} />
                    <div className='cart-quantity'>{this.state.quantity}</div>
                    <AddCircleOutlineOutlinedIcon htmlColor="lightgray" onClick={() => this.IncrementItem(item)} />
                  </div>
                  <div className='right'>
                    <button className='remove' value={item._id} onClick={(event) => this.removeCartItems(event.target.value)}>Remove</button>
                  </div>
                </div>
              </div>
              <div className='buttonn'>
                <button className='order' onClick={this.openCustomerDetails}>PLACE ORDER</button>
              </div>
            </div>
          ))}
        </div>
        {this.state.opencustomerpage == false ?
          <div className='customer-details'  >
            <div className='inside-details'>Customer Details</div>
          </div>
          :
          <div className='customers-detail'>
            <div className='inside-customerdetails'>
              <div className='h1'>Customer Details</div>
              <div className='text-fields'>
                <div className='name-field'>
                  <TextField name='fullName' size="medium" id="outlined-basic" label="Name" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
                <div className='mobile-num'>
                  <TextField name='phonenumber' id="outlined-basic" label="Phone number" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
              </div>
              <div className='text-fields'>
                <div className='name-field'>
                  <TextField name='pincode' size="medium" id="outlined-basic" label="Pincode" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
                <div className='mobile-num'>
                  <TextField name='locality' id="outlined-basic" label="Locality" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
              </div>
              <div className='fullAddress'>
                <TextField name='fullAddress' id="outlined-basic" label="fullAddress" variant="outlined" style={{ width: "532px" }} multiline="true" rows="4" onChange={(e) => this.changefield(e)} />
              </div>
              <div className='text-fields'>
                <div className='name-field'>
                  <TextField name='city' size="medium" id="outlined-basic" label="city/town" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
                <div className='mobile-num'>
                  <TextField name='landmark' id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "250px" }} onChange={(e) => this.changefield(e)} />
                </div>
              </div>
              <div className='radio'>
                <FormControl>
                  <FormLabel className='type'>Type</FormLabel>
                  <RadioGroup className='radiogroup'>
                    <FormControlLabel value="Home" control={<Radio />} label="Home" />
                    <FormControlLabel value="Work" control={<Radio />} label="Work" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className='buttons'>
                <button className='continue-button' onClick={(event) => this.Continue(event)}  /* onClick={this.openOrderDetails} */ >Continue</button>
              </div>
            </div>
          </div>
        }
        {this.state.openOrderpage == false ?
          <div className='customer-details'>
            <div className='inside-details'>Order Summary</div>
          </div>
          :
          <div className='order_summary'>
            <div className='mycartt'>Order Summary</div>
            {this.state.mycartArray.map((item, index) => (
              <div >
                <div className='content-container'>
                  <img className='image_style' src={book1} alt="image" />
                  <div className='cart-description'>
                    <div className='bookname'>{item.product_id.bookName}</div>
                    <div className='authorname'>{item.product_id.author}</div>
                    <div className='bookprice'>Rs. {item.product_id.price}</div>
                  </div>
                </div>
                <div className='buttonss'>
                  <button className='order' onClick={(event) => this.checkout(event)}>CHECKOUT</button>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default MyCart