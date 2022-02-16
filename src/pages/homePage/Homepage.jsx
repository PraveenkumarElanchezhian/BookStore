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
                        <div className=''>
                            <img src={homepage1} alt='image1' />
                        </div>
                        <h2>Order Placed Successfully</h2>
                        <div className=''>
                            <img src={homepage2} alt='image2' />
                        </div>
                        <div>
                            hurry!!! your order is confirmed <br />
                            the order id is #123456 save the order id for <br />
                            further communication..
                        </div>
                    </div>
                    <div className='section-2'>
                        <div className='contents1'>
                            Email us
                            Contact us
                            Address
                        </div>
                        <div className='contents2'>
                           

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