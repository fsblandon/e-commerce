import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {registerUser} from '../actions';

import Register from '../views/Register'

/* const mapStateToProps = (state) => {
    const { registering } = state.registration
    return { registering };
}; */

const mapStateToProps = ({user}) => {
    return { user };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    registerUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Register)