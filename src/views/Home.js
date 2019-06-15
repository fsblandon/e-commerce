import React from 'react';

import BookCard from '../components/bookCard';

import {  dataBooks } from '../data/books';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            cart: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);

    }
    

    componentDidMount() {
        this.setState({ books: dataBooks.data.books })
    }

    handleAddToCart(book) {
        const cartItem = this.state.cart.find(x => x.ID === book.ID);
        if (this.state.cart.length === 0) {
            //this.setState({cart: [...this.state.cart, book]});
            this.setState({cart: [...this.state.cart, book]});
        } else {
            !cartItem && this.setState({cart: [...this.state.cart, book]});
        }
        console.log(cartItem);
        console.log(this.state.cart);
    }

    handleChange = (e) => {

        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = dataBooks.data.books;
            newList = currentList.filter(item => {
                const lc = item.title.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = dataBooks.data.books;
        }
        this.setState({
            books: newList
        });
    }

    handleClick = () => {
        
    }

    render() {
        const { books, cart } = this.state
        return (
            <React.Fragment>
                <nav className="navbar navbar-light navBack fixed-top">
                    <a className="navbar-brand">e-Biblioteca</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar libro" aria-label="Search" onChange={this.handleChange}/>
                    </form>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                        Carrito <span className="badge badge-light">{cart.length}</span>
                    </button>
                </nav>
                <div className="container-fluid content">
                    <div className="row">
                            {books.map(book => {
                                return <BookCard {...book} key={book.ID} handleAddToCart={this.handleAddToCart.bind(this, book)}/>
                            })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home