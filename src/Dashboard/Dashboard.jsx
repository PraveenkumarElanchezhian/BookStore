import React from 'react';
import './Dashboard.scss';
import { Component } from 'react';
import Header from '../pages/header/Header';
import Books from '../pages/Books/Books';




export class Dashboard extends Component {
constructor(props) {
  super(props)

  this.state = {
     cartCount:0,
     wishlistCount:0
  }
}

 childToParent = (item) => {
    this.setState({
        cartCount: item.length
    })
  }

  wishlistCounts = (item) => {
    this.setState({
        wishlistCount: item.length
    })
  }

    render() {
        return (
            <div className="dash-container">
                <Header parentToChild={this.state.cartCount} wishlistCount={this.state.wishlistCount}/>

                <div className='second-header'>
                    <div className='left-title'>
                        <span className="book">Books</span>
                        <span className='quantity'>(22 items)</span>
                    </div>
                    <div>
                        <select name="sort by relevance" id="dropdown">
                            <option value="lowPrice">Price:Low to high</option>
                            <option value="highPrice">Price:High to low</option>
                            <option value="newPrice">Newest arrivals</option>
                        </select>
                    </div>
                </div>
                <div className='bookList'>
                    <div>
                        <Books childToParent={this.childToParent} wishlistCount={this.wishlistCounts}/>
                    </div>
                </div>

            </div >
        )
    }
}

export default Dashboard;
