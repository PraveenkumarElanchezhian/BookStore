import React, { Component } from 'react'
import Header from '../header/Header';
import homepage1 from '../../Images/homepage1.png';
import homepage2 from '../../Images/homepage2.png';
import './Homepage.scss';
export class Homepage extends Component {
    render() {
        return (
            <div className='header'>
                <Header />
                <div className='body_content'>
                    <div className='section-1'>
                        <div className='image1'>
                            <img src={homepage1} alt='image1' />
                        </div>
                        <h2 className='conts1'>Order Placed Successfully</h2>
                        <div className='image2'>
                            <img src={homepage2} alt='image2' />
                        </div>
                        <div className='const2'>
                            hurry!!! your order is confirmed <br />
                            the order id is #123456 save the order id for <br />
                            further communication..
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='contents1'>
                           <div className='email'>Email us</div> 
                           <div className='contact'>Contact us</div> 
                           <div className='Address'>Address</div> 
                        </div>
                        <div className='contents2'>
                            <div className='email_d'>admin@bookstore.com</div> 
                            <div className='contact_d'>+91 8163475881</div> 
                            <div className='Address_d'>42/14-salem</div> 
                        </div>
                    </div>
                    <div className='section-3'>
                        <button className='buttonq'>CONTINUE SHOPPING</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage