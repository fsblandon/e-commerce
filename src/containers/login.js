import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../views/Login';
import {loginUser} from '../actions';


const mapStateToProps = ({users}) => ({
    users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    loginUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
