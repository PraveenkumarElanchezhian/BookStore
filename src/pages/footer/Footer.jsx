import React, { Component } from 'react'
import './Footer.scss'

export class Footer extends Component {
    render() {
        return (
            <div className='footer-container'>
                <div className='footer'>
                    <div className='footer_content'> 
                        Copyright © 2020, Bookstore Private Limited. All Rights Reserved
                    </div>

                </div>
            </div>
        )
    }
}

export default Footer