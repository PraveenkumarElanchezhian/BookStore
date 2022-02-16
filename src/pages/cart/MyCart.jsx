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
       getmycartArray :[]
    }
  }

  componentDidMount(){
    this.getmycartlist(); 
  }

  getmycartlist = () => {
    service.getCart()
        .then(res => {
          console.log(res);
            this.setState({
              getmycartArray: res.data.result
            })
        })
        .catch(err => {
            console.log(err);
        })
}

checkout=()=>{
  window.open("/homepage", "_self");
}

  render() {
    return (

      <div className='carts-container'>
        <Header />
        {/* {this.state.getmycartArray.map((item, index) => ()} */}
        <h3 className='heading'></h3>
        <div className='carts'>
          <h3 className='my-cart'>My Cart(2)</h3>
          <div >
            <div className='content-container'>
              <img className='image_style' src={book1} alt="image" />
              <div className='cart-description'>
                <div className='bookname'>Don't Make Me Think</div>
                <div className='authorname'>by Steve Krug</div>
                <div className='bookprice'>Rs. 1500</div>
              </div>
            </div>
            <div className='update-cart'>
              <div className='empty'></div>
              <div className='cart_right'>
                <div className='left'>
                  <RemoveCircleOutlineOutlinedIcon htmlColor="lightgray" />
                  <div className='cart-quantity'>1</div>
                  <AddCircleOutlineOutlinedIcon htmlColor="lightgray" />
                </div>
                <div className='right'>
                  <button className='remove' >Remove</button>
                </div>
              </div>
            </div>
            <div className='button'>
              <button className='order'>PLACE ORDER</button>
            </div>
          </div>
        </div>

        <div className='customer-details'>
          <div className='inside-details'>Customer Details</div>
        </div>

        <div className='customers-detail'>
          <div className='inside-customerdetails'>
            <div className='h1'>Customer Details</div>
            <div className='text-fields'>
              <div className='name-field'>
                <TextField size="medium" id="outlined-basic" label="Name" variant="outlined" style={{ width: "250px" }} />
              </div>
              <div className='mobile-num'>
                <TextField id="outlined-basic" label="Phone number" variant="outlined" style={{ width: "250px" }} />
              </div>
            </div>
            <div className='text-fields'>
              <div className='name-field'>
                <TextField size="medium" id="outlined-basic" label="Pincode" variant="outlined" style={{ width: "250px" }} />
              </div>
              <div className='mobile-num'>
                <TextField id="outlined-basic" label="Locality" variant="outlined" style={{ width: "250px" }} />
              </div>
            </div>
            <div className='Address'>
              <TextField id="outlined-basic" label="Address" variant="outlined" style={{ width: "532px" }} multiline="true" rows="4" />
            </div>
            <div className='text-fields'>
              <div className='name-field'>
                <TextField size="medium" id="outlined-basic" label="city/town" variant="outlined" style={{ width: "250px" }} />
              </div>
              <div className='mobile-num'>
                <TextField id="outlined-basic" label="Landmark" variant="outlined" style={{ width: "250px" }} />
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
            <button className='continue-button' >Continue</button>
            </div>
          </div>
        </div>

        <div className='customer-details'>
          <div className='inside-details'>Order Summary</div>
        </div>

        <div className='order_summary'>
          <div className='my-cart'>Order Summary</div>
          <div >
            <div className='content-container'>
              <img className='image_style' src={book1} alt="image" />
              <div className='cart-description'>
                <div className='bookname'>Don't Make Me Think</div>
                <div className='authorname'>by Steve Krug</div>
                <div className='bookprice'>Rs. 1500</div>
              </div>
            </div>
            <div className='button'>
              <button className='order' onClick={(event) => this.checkout(event)}>CHECKOUT</button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default MyCart