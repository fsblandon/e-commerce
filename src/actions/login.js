import userConstants from '../_constants/userConstants';

//Service
import getUsers from '../services/LoginService';


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

export const fetchUsers = () => (dispatch) => {
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
}