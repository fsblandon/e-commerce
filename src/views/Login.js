import React from 'react';

class Login extends React.Component {
    componentDidMount() {
        this.props.fecthUsers();
    }

    render() {
        return (
            <div className="container-fluid">
                <button ></button>
            </div>
        )
    }
}

export default Login