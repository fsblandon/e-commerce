import {userConstants} from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {isLogin: false, user} : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                isLogin: false,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                isLogin: false,
                error: action.error
            };
        default:
            return state;
    }
}
