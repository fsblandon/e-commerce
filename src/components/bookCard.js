import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookCard extends React.Component {
  state = {
  }

  render() {
    const {ID, title, author, content, cover } = this.props;
    return (
          <div className="col-md-4">
            <div className='card'>
                <img src={cover}  className="card-img-top" alt="book"/>
                <div className="card-body">
                    <h5>{title} - {author}</h5>
                    <p>{content}</p>
                    <Link className='btn btn-primary'>Solicitar</Link>
                </div>
                <Link className='btn btn-primary' to={`/book/${ID}`}>Detalle</Link>
            </div>
          </div>
    );
  }
}

BookCard.propTypes = {
  ID: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  cover: PropTypes.string
}

export default BookCard