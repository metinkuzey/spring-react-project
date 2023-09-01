import {
  getRequest,
  postRequest,
  deleteRequestById,
  putRequest,
  getRequestById,
} from "../../hooks/request";
import {
  CREATE_MODEL_REQUEST,
  CREATE_MODEL_REQUEST_FAIL,
  CREATE_MODEL_REQUEST_SUCCESS,
  DELETE_MODEL_REQUEST,
  DELETE_MODEL_REQUEST_FAIL,
  DELETE_MODEL_REQUEST_SUCCESS,
  GET_ALL_MODEL_REQUEST,
  GET_ALL_MODEL_REQUEST_FAIL,
  GET_ALL_MODEL_REQUEST_SUCCESS,
  GET_MODEL_BY_ID_REQUEST,
  GET_MODEL_BY_ID_REQUEST_FAIL,
  GET_MODEL_BY_ID_REQUEST_SUCCESS,
  UPDATE_MODEL_REQUEST,
  UPDATE_MODEL_REQUEST_FAIL,
  UPDATE_MODEL_REQUEST_SUCCESS,
} from "../constants/modelConstant";

export const getAllModelsAction = async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_MODEL_REQUEST,
    });

    const { data } = await getRequest(`/api/models`);

    dispatch({
      type: GET_ALL_MODEL_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_MODEL_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getModelByIdAction = async (dispatch, id) => {
  try {
    dispatch({
      type: GET_MODEL_BY_ID_REQUEST,
    });

    const { data } = await getRequestById(`/api/models`, id);

    dispatch({
      type: GET_MODEL_BY_ID_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_MODEL_BY_ID_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createModelAction = async (dispatch, model) => {
  try {
    dispatch({
      type: CREATE_MODEL_REQUEST,
    });

    const { data } = await postRequest(`/api/models`, model);

    dispatch({
      type: CREATE_MODEL_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_MODEL_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteModelAction = async (dispatch, id) => {
  try {
    dispatch({
      type: DELETE_MODEL_REQUEST,
    });

    const { data } = await deleteRequestById(`/api/models`, id);

    dispatch({
      type: DELETE_MODEL_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MODEL_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateModelAction = async (dispatch, model) => {
  try {
    dispatch({
      type: UPDATE_MODEL_REQUEST,
    });

    const { data } = await putRequest(`/api/models`, model);

    dispatch({
      type: UPDATE_MODEL_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_MODEL_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
