import React from 'react';
import BookCard from '../components/bookCard';

import {  dataBooks } from '../data/books';
class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        this.setState({ books: dataBooks.data.books })
    }

    render() {
        const { books } = this.state
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light navBack">
                    <a className="navbar-brand">e-Biblioteca</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar libro</button>
                    </form>
                </nav>
                <div className="container-fluid">
                            {books.map(book => {
                                return <BookCard {...book} key={book.ID}/>
                            })}
                </div>
            </React.Fragment>
        );
    }
}

export default Home