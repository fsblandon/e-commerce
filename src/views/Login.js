import React from 'react';

import { Link } from 'react-router-dom';

import { css } from '@emotion/core';

import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    width: 50%;
    border-color: red;
`;

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.loginUser(username, password);
        }
    }

    render() {
        const { username, password, submitted } = this.state;
        return (
            <div className="container-fluid background">
                <h1 className="padding">Bienvenidos a tu E-Commerce</h1>
                <div className="col-md-12">
                    <form name="form" onSubmit={this.handleSubmit} className="form">
                        <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                            {submitted && !username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                            {submitted && !password &&
                                <div className="help-block">Password is required</div>
                            }
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Login</button>
                            <Link to="/register" className="btn btn-link">Register</Link>
                        </div>
                        <ClipLoader
                            css={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={this.state.loading}
                            />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login