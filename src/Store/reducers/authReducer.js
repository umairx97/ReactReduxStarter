import ActionTypes from '../actions/ActionTypes';

const initialAuthState = {
  user: null
};
export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN:
      return {
        ...state,
        user: action.data.user
      };

    default:
      return state;
  }
};
