import { postRequest } from "../../hooks/request";
import {
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  SIGN_IN_USER_FAIL,
  SIGN_IN_USER_REQUEST,
  SIGN_IN_USER_SUCCESS,
} from "../constants/userConstant";

export const signInUserAction = async (dispatch, user) => {
  try {
    dispatch({
      type: SIGN_IN_USER_REQUEST,
    });

    const { data } = await postRequest(
      `/api/v1/auth/authenticate-cookie`,
      user
    );

    dispatch({
      type: SIGN_IN_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const registerUserAction = async (dispatch, user) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const { data } = await postRequest(`/api/v1/auth/register-cookie`, user);

    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
