import React from 'react';

class Home extends React.Component {

    render() {
        return <div className="container-fluid">
            <Login></Login>
            <Register></Register>
        </div>
    }
}

export default Home