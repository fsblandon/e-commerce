import React from 'react';
import BookCard from '../components/bookCard';
import { getBooks} from '../api/books'

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            book:{}
        }
    }

    componentDidMount() {
        getBooks()
            .then((book) => this.setState({book: book}))
            .catch((err) => console.log('Error getting API' + err));
    }

    render() {
        const { book } = this.state
        return (
            <div className="container-fluid background">
                <BookCard {...book}/>
            </div>
        );
    }
}

export default Home