import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {registerUser} from '../actions';

import Register from '../views/Register'

const mapStateToProps = (state) => {
    const { registering } = state.registration
    return { registering };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser : (data) => dispatch(registerUser(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register)