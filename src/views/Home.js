import React from 'react';

import BookCard from '../components/bookCard';

import {  dataBooks } from '../data/books';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }
    

    componentDidMount() {
        this.setState({ books: dataBooks.data.books })
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

    render() {
        const { books } = this.state
        return (
            <React.Fragment>
                <nav className="navbar navbar-light navBack fixed-top">
                    <a className="navbar-brand">e-Biblioteca</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="text" placeholder="Buscar libro" aria-label="Search" onChange={this.handleChange}/>
                    </form>
                </nav>
                <div className="container-fluid content">
                    <div className="row">
                            {books.map(book => {
                                return <BookCard {...book} key={book.ID}/>
                            })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home