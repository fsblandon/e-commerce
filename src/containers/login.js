import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Login from '../views/Login'

const mapStateToProps = ({movies, users}) => ({
    movies,
    users
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    requestMovies,
    fetchUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)
