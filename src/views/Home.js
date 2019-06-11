import React from 'react';
import BookCard from '../components/bookCard';
import {getBooks} from '../api/books'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            books: []
        }
    }

    componentDidMount() {
        getBooks()
        .then(books => {
            this.setState({books})
        })
        .catch(error => {
            console.log('Error getting API' + error)
        })
    }

    render() {
        const { books } = this.state
        return (
            <React.Fragment>
                <div className="container-fluid background">
                    {books.map(book => {
                        return <BookCard {...book}/>
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default Home