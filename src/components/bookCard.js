import React from 'react'
import PropTypes from 'prop-types'

class BookCard extends React.Component {
  state = {
  }

  shouldComponentUpdate() {
    //Remember to return true or false
    return true
  }


  componentDidMount() {
    console.log(this.state)
  }

  componentDidUpdate(prevProps, prevState) {
    //console.log(this.state)
  }

  componentWillUnmount() {
    //console.log('I will unmount')
  }

  render() {
    const { ID, title, author, content, cover } = this.props;
    return (
        <div className='card'>
            <img src={cover}  className="card-img-top" alt="book"/>
            <div className="card-body">
                <h5>{title} - {author}</h5>
                <p>{content}</p>
            </div>
        </div>
    );
  }
}

BookCard.propTypes = {
  ID: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  cover: PropTypes.string
}

export default BookCard