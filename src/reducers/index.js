import authentication from './authentication';
import registration from './registration';
import {combineReducers} from 'redux';

export default combineReducers({
    authentication,
    registration
});