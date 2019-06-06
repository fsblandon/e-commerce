import userConstants from '../_constants/userConstants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {isLogin: true, user} : {};

export default (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                isLogin: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                isLogin: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        default:
            state;
    }
}
