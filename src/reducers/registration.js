import  {userConstants}  from '../_constants';

export default (state = {}, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        ...state,
        registering: true
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state
      };
    case userConstants.REGISTER_FAILURE:
      return {
        ...state
      };
    default:
      return state
  }
}