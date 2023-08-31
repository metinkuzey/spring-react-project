import {
  deleteRequestById,
  getRequest,
  getRequestById,
  postRequest,
  putRequest,
} from "../../hooks/request";
import {
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_REQUEST_FAIL,
  CREATE_VEHICLE_REQUEST_SUCCESS,
  DELETE_VEHICLE_REQUEST,
  DELETE_VEHICLE_REQUEST_FAIL,
  DELETE_VEHICLE_REQUEST_SUCCESS,
  GET_ALL_VEHICLE_REQUEST,
  GET_ALL_VEHICLE_REQUEST_FAIL,
  GET_ALL_VEHICLE_REQUEST_SUCCESS,
  GET_VEHICLE_BY_ID_REQUEST,
  GET_VEHICLE_BY_ID_REQUEST_FAIL,
  GET_VEHICLE_BY_ID_REQUEST_SUCCESS,
  UPDATE_VEHICLE_REQUEST,
  UPDATE_VEHICLE_REQUEST_FAIL,
  UPDATE_VEHICLE_REQUEST_SUCCESS,
} from "../constants/vehicleConstant";

export const getAllVehiclesAction = async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_VEHICLE_REQUEST,
    });

    const { data } = await getRequest(`/api/vehicles`);

    dispatch({
      type: GET_ALL_VEHICLE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_VEHICLE_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getVehicleByIdAction = async (dispatch, id) => {
  try {
    dispatch({
      type: GET_VEHICLE_BY_ID_REQUEST,
    });

    const { data } = await getRequestById(`/api/vehicles`, id);

    dispatch({
      type: GET_VEHICLE_BY_ID_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_VEHICLE_BY_ID_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createVehicleAction = async (dispatch, vehicle) => {
  try {
    dispatch({
      type: CREATE_VEHICLE_REQUEST,
    });

    const { data } = await postRequest(`/api/vehicles`, vehicle);

    dispatch({
      type: CREATE_VEHICLE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_VEHICLE_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteVehicleAction = async (dispatch, id) => {
  try {
    dispatch({
      type: DELETE_VEHICLE_REQUEST,
    });

    const { data } = await deleteRequestById(`/api/vehicles`, id);

    dispatch({
      type: DELETE_VEHICLE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_VEHICLE_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateVehicleAction = async (dispatch, vehicle) => {
  try {
    dispatch({
      type: UPDATE_VEHICLE_REQUEST,
    });

    console.log(vehicle);

    const { data } = await putRequest(`/api/vehicles`, vehicle);

    dispatch({
      type: UPDATE_VEHICLE_REQUEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_VEHICLE_REQUEST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
