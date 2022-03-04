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
import { Redirect } from "react-router-dom";
import Header from '../header/Header';
import book1 from '../../Images/book1.png';
import Footer from '../footer/Footer';
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
      orders: [],
      redirect: null,
      custNameError: '',
      custPhnoError: '',
      custPincodeError: '',
      custLocalityError: '',
      custAddressError: '',
      custCityError: '',
      custLandmarkError: '',
      myWishlistArray:[],
      addressType:''
    }
  }
  
  custValidation = () => {
    let isError = false;
    const error = this.state;
    error.custNameError = this.state.fullName === '' ? true : false;
    error.custPhnoError = this.state.phonenumber === '' ? true : false;
    error.custPincodeError = this.state.pincode === '' ? true : false;
    error.custLocalityError = this.state.locality === '' ? true : false;
    error.custAddressError = this.state.fullAddress === '' ? true : false;
    error.custCityError = this.state.city === '' ? true : false;
    error.custLandmarkError = this.state.landmark === '' ? true : false;

    this.setState({
      ...error
    })

    return isError = error.custNameError || error.custPhnoError || error.custPincodeError || error.custLocalityError || error.custAddressError || error.custCityError || error.custLandmarkError;

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

  componentDidMount() {
    this.getmycartlist();
    this.getmyWishlist();
  }

  getmycartlist = () => {
    service.getCart()
      .then(res => {
      
        this.setState({
          mycartArray: res.data.result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  getmyWishlist = () => {
    service.getWishlist()
      .then(res => {
        this.setState({
          myWishlistArray: res.data.result
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  remove=()=> {
    {this.state.mycartArray.map((item, i) => {
      if(item._id !== undefined){
        this.removeCartItems(item._id);
      }                  
   })}
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
        this.getmycartlist();
        this.remove();
        this.setState({
          redirect: "/homepage"
        })
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
    service.deleteCart(item)
      .then(res => {
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

  changeRadiofields = (e) => {
    let result = e.target.value
    this.setState({
      addressType :result,
    });
  }

  Continue = () => {
    var validated = this.custValidation();
    if (!validated) {
    
      let data = {
        "addressType": this.state.addressType,
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
        
        })
        .catch(err => {
          console.log(err);
        })
      this.setState({
        openOrderpage: true
      })
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className='carts-container'>
        <Header cartlistCount={this.state.mycartArray.length}  wishlistCount={this.state.myWishlistArray.length}/>
        <h3 className='heading'></h3>
        <div className='mycart-container'>
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
              </div>
            ))}
              <div className='buttonn'>
                  <button className='order' onClick={this.openCustomerDetails}>PLACE ORDER</button>
                </div>
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
                    <TextField name='fullName' size="medium" id="outlined-basic" label="Name" variant="outlined" style={{ width: "250px" }} error={this.state.custNameError} helperText={this.state.custNameError ? "Enter a name" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                  <div className='mobile-num'>
                    <TextField name='phonenumber' id="outlined-basic" label="Phone number" variant="outlined" style={{ width: "250px" }} error={this.state.custPhnoError} helperText={this.state.custPhnoError ? "Enter a phoneno" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                </div>
                <div className='text-fields'>
                  <div className='name-field'>
                    <TextField name='pincode' size="medium" id="outlined-basic" label="Pincode" variant="outlined" style={{ width: "250px" }} error={this.state.custPincodeError} helperText={this.state.custPincodeError ? "Enter a pincode" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                  <div className='mobile-num'>
                    <TextField name='locality' id="outlined-basic" label="Locality" variant="outlined" style={{ width: "250px" }} error={this.state.custLocalityError} helperText={this.state.custLocalityError ? "Enter a locality" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                </div>
                <div className='fullAddress'>
                  <TextField name='fullAddress' id="outlined-basic" label="fullAddress" variant="outlined" style={{ width: "532px" }} multiline="true" rows="4" error={this.state.custAddressError} helperText={this.state.custAddressError ? "Enter a fulladdress" : " "} onChange={(e) => this.changefield(e)} />
                </div>
                <div className='text-fields'>
                  <div className='name-field'>
                    <TextField name='city' size="medium" id="outlined-basic" label="city/town" variant="outlined" style={{ width: "250px" }} error={this.state.custCityError} helperText={this.state.custCityError ? "Enter a city" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                  <div className='mobile-num'>
                    <TextField name='landmark' id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "250px" }} error={this.state.custLandmarkError} helperText={this.state.custLandmarkError ? "Enter a landmark" : " "} onChange={(e) => this.changefield(e)} />
                  </div>
                </div>
                <div className='radio'>
                  <FormControl>
                    <FormLabel className='type'>Type</FormLabel>
                    <RadioGroup className='radiogroup'>
                      <FormControlLabel name='addresstype' value="Home" control={<Radio />} label="Home" onChange={(e) => this.changeRadiofields(e)} />
                      <FormControlLabel name='addresstype' value="Office" control={<Radio />} label="Office" onChange={(e) => this.changeRadiofields(e)} />
                      <FormControlLabel name='addresstype' value="Other" control={<Radio />} label="Other" onChange={(e) => this.changeRadiofields(e)} />
                    </RadioGroup>
                  </FormControl>
                </div>
                <div className='buttons'>
                  <button className='continue-button' onClick={(event) => this.Continue(event)}>Continue</button>
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
                <>
                  <div className='content-container'>
                    <img className='image_style' src={book1} alt="image" />
                    <div className='cart-description'>
                      <div className='bookname'>{item.product_id.bookName}</div>
                      <div className='authorname'>{item.product_id.author}</div>
                      <div className='bookprice'>Rs. {item.product_id.price}</div>
                    </div>
                  </div>
                </>
              ))}
              <div className='buttonss'>
                    <button className='order' onClick={(event) => this.checkout(event)}>CHECKOUT</button>
                  </div>
            </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default MyCart