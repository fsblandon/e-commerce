import React from 'react';

class Home extends React.Component {

    componentDidMount() {
        this.props.fecthUsers();
    }

    render() {
        return (
            <div className="container-fluid">
                <span>PRODUCTS</span>
            </div>
        );
    }
}

export default Home