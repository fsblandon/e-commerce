import { request } from "https";
import loginService from '../services/LoginService'

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));

        loginService(username, password)
            .then(
                user => {

                },
                error => {

                }
            );
    }
}
export default login