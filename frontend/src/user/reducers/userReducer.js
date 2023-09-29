import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
} from "../constants/userConstant";

const signInUserReducer = (user, action) => {
  switch (action.type) {
    case SIGN_IN_USER_REQUEST:
      return { loading: true };
    case SIGN_IN_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case SIGN_IN_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return user;
  }
};

const registerUserReducer = (user, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case REGISTER_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return user;
  }
};

export { signInUserReducer, registerUserReducer };
