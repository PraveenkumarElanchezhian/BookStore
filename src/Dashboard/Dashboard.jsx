import React from 'react';
import './Dashboard.scss';
import { Component } from 'react';
import Header from '../pages/header/Header';
import Books from '../pages/Books/Books';
import Footer from '../pages/footer/Footer';
export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.child = React.createRef();
        this.sorting = React.createRef();

        this.state = {
            cartCount: 0,
            wishlistCount: 0,
            searchItems: '',
            booklength: 0
        }
    }
    searchItems = (item) => {
        this.setState({
            searchItems: item
        })
        this.child.current.getAlert(item);
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

    booksCount = (item) => {
        this.setState({
            booklength: item
        })
    }

    change = (item) => {
        this.setState({ value: item.target.value });
        this.child.current.getsort(item.target.value);
    }

    render() {
        return (
            <div className="dash-container">
                <Header searchbookItems={this.searchItems} cartlistCount={this.state.cartCount} wishlistCount={this.state.wishlistCount} />
                <div className='dashboard'>
                    <div className='second-header'>
                        <div className='left-title'>
                            <span className="book">Books</span>
                            <span className='quantity'>({this.state.booklength})</span>
                        </div>
                        <div>
                            <select name="sort by relevance" id="dropdown" onChange={this.change}>
                                <option value="sortItems">Sort by relevance</option>
                                <option value="asc" >Price:Low to high</option>
                                <option value="desc" >Price:High to low</option>
                                <option value="newPrice">Newest arrivals</option>
                            </select>
                        </div>
                    </div>
                    <div className='bookList'>
                        <div>
                            <Books ref={this.child} childToParent={this.childToParent} wishlistCount={this.wishlistCounts} parentToChild={this.state.searchItems} booksCount={this.booksCount} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Dashboard;
