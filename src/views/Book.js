import React from 'react';

import BookCard from '../components/bookCard';

import {  dataBooks } from '../data/books';

export default class Book extends React.Component {
  state = {
    book: {},
  }

  componentDidMount() {
    const { match, books } = this.props;
    if (match.params.id) {
      const book = books.data.filter((book) => {
        return Number(book.ID) === Number(match.params.id)
      })
      this.setState({ book: book[0] })
    }

  }

  render() {
    const { book } = this.state;
    console.log(book);
    return <BookCard {...book} />
  }
}