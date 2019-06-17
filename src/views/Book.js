import React from 'react';

//import BookCard from '../components/bookCard';

import {  dataBooks } from '../data/books';

import { history } from '../_helpers/history';

export default class Book extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      book: {}
    }
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params.id) {
      const book = dataBooks.data.books.filter((book) => {
        return Number(book.ID) === Number(match.params.id)
      })
      this.setState({ book: book[0] })
    }

  }

  goBack() {
    history.goBack();
  }

  render() {
    const { book } = this.state;
    return (
      <React.Fragment>
        <div className="row padding">
          <div className="col-md-8 text-center">
            <button className='btn btn-primary' onClick={this.goBack}>Regresar</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className='card'>
                <img src={book.cover}  className="card-img-top" alt="book"/>
                <div className="card-body">
                  <h3>Autor: {book.author}</h3>
                  <h5>Editorial: {book.publisher}-{book.publisher_date}</h5>
                  <h5>Páginas: {book.pages}</h5>
                  <h5>Idioma: {book.language}</h5>
                  <p className="detail"><span>Descripción: </span>{book.content}</p>
                </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
    //return <BookCard {...book} />
  }
}