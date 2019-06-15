import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class BookCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      book: {}
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.props.handleAddToCart(this.state.book)
  }
  

  render() {
    const {ID, title, author, content_short, cover } = this.props;
    return (
          <div className="col-md-4">
            <div className='card'>
                <img src={cover}  className="card-img-top" alt="book"/>
                <div className="card-body">
                    <h5>{title} - {author}</h5>
                    <p className="detail">{content_short}</p>
                    <button className="btn btn-primary" onClick={this.handleClick}>
                      Solicitar
                    </button>
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
  content_short: PropTypes.string,
  cover: PropTypes.string
}

export default BookCard