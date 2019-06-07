import initialState from './initialState';

import users from '../data/users';

const initialState = user ? {isLogin: true, user} : {};


export default(state = initialState, action) => {
    switch (action.type) {
        case REQUEST_USERS:
            return {
                ...state,
                users: users.users
            }
        default:
            return state;
    }
}