import React from 'react';

import BookCard from '../components/bookCard';
import Cart from '../components/cart';

import {  dataBooks } from '../data/books';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            cart: [],
            showCart: false,
            id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.viewCart = this.viewCart.bind(this);
    }
    

    componentDidMount() {
        this.setState({ books: dataBooks.data.books });
    }

    /* componentDidUpdate() {
        this.setState({cart: this.props.cart ? this});
    } */

    handleAddToCart(book) {
        const cartItem = this.state.cart.find(x => x.ID === book.ID);
        !cartItem && this.setState({cart : [...this.state.cart, book]});
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

    viewCart = () => {
        if(this.state.cart.length > 0){
            this.setState({showCart: !this.state.showCart});
            this.setState({id: 'cartModal'});
        } else {
            alert('Selecciona libros a solicitar');
            this.setState({showCart: this.state.showCart});
        }
    }

    render() {
        const { books, cart, showCart, id } = this.state;
        return (
            <React.Fragment>
                <nav className="navbar navbar-light navBack fixed-top">
                    <a className="navbar-brand">e-Biblioteca</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar libro" aria-label="Search" onChange={this.handleChange}/>
                    </form>
                    <button className="btn btn-primary ml-auto" onClick={this.viewCart} data-toggle="modal" data-target="#cartModal">
                        Carrito <span className="badge badge-light">{cart.length}</span>
                    </button>
                </nav>
                <div className="container-fluid content">
                    <Cart showCart={showCart} cart={cart} id={id} onClick={this.viewCart}/>
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