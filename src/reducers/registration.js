import  {userConstants}  from '../_constants';

export default (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        user: action.payload
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state
  }
}