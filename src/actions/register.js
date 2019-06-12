import { userConstants } from '../_constants';

import { history } from '../_helpers/history';


export const registerRequest = (user) => ({
    type: userConstants.REGISTER_REQUEST,
    payload: user
});

export const registerSuccess = (user) => ({
    type: userConstants.REGISTER_SUCCESS,
    payload: user
});

export const registerFailure = (error) => ({
    type: userConstants.REGISTER_FAILURE,
    payload: error
});

export const registerUser = (data) => (dispatch) => {
    dispatch(registerRequest(data));
    
    var user = JSON.stringify(data);
    //window.localStorage.setItem('user', user);

    if(localStorage.getItem('user') !== user) {
        window.localStorage.setItem('user', user);
        dispatch(registerSuccess(user));
        history.push('/');
    } else {
        dispatch(registerFailure(alert('Usuario ya existe')));
    }
}