import { userConstants } from '../_constants';

import { history } from '../_helpers/history';



export const loginRequest = (user) => ({
    type: userConstants.LOGIN_REQUEST,
    payload: user
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
    dispatch(loginRequest(username));
    const user = JSON.parse(localStorage.getItem('user'));
    if(user.username !== username || user.password !== password) {
        dispatch(loginFailure(alert('Usuario incorrecto')));
    } else {
        dispatch(loginSuccess(user));
        history.push('/home');
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