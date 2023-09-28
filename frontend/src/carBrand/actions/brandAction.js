import {
  getRequest,
  postRequest,
  deleteRequestById,
  putRequest,
} from "../../hooks/request";
import {
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_REQUEST_FAIL,
  CREATE_BRAND_REQUEST_SUCCESS,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_REQUEST_FAIL,
  DELETE_BRAND_REQUEST_SUCCESS,
  GET_ALL_BRANDS_REQUEST,
  GET_ALL_BRANDS_REQUEST_FAIL,
  GET_ALL_BRANDS_REQUEST_SUCCESS,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_REQUEST_FAIL,
  UPDATE_BRAND_REQUEST_SUCCESS,
} from "../constants/brandConstant";

export const getAllBrands = async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_BRANDS_REQUEST,
    });

    const { data } = await getRequest(`/api/brands`);

    dispatch({
      type: GET_ALL_BRANDS_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_BRANDS_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createBrand = async (dispatch, brand, axiosPrivate) => {
  try {
    dispatch({
      type: CREATE_BRAND_REQUEST,
    });

    const { data } = await axiosPrivate.post(`/api/brands`, brand);

    dispatch({
      type: CREATE_BRAND_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_BRAND_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteBrand = async (dispatch, id) => {
  try {
    dispatch({
      type: DELETE_BRAND_REQUEST,
    });

    const { data } = await deleteRequestById(`/api/brands`, id);

    dispatch({
      type: DELETE_BRAND_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BRAND_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBrand = async (dispatch, brand) => {
  try {
    dispatch({
      type: UPDATE_BRAND_REQUEST,
    });

    const { data } = await putRequest(`/api/brands`, brand);

    dispatch({
      type: UPDATE_BRAND_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BRAND_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateBrands = (dispatch, brands, brand) => {};
