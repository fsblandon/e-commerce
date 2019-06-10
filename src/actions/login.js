import { userConstants } from '../_constants';

//Service
//import getUsers from '../services/LoginService';


export const loginRequest = () => ({
    type: userConstants.LOGIN_REQUEST
});

export const loginSuccess = (user) => ({
    type: userConstants.LOGIN_SUCCESS,
    payload: user
});

export const loginFailure = (error) => ({
    type: userConstants.LOGIN_FAILURE,
    payload: error
});

export const loginUser = (username, password) => (dispatch) => {
    dispatch(loginRequest());
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.username !== username && user.password !== password) {
        dispatch(loginFailure('User not valid'));
    } else {
        dispatch(loginSuccess(user));
    }
}

/* export const fetchUsers = () => (dispatch) => {
    dispatch(loginRequest());
    //api
    getUsers()
    .then(
        (user) => {
            dispatch(loginSuccess(user));
        },
        (error) => {
            dispatch(loginFailure(error));
        }
    )
} */