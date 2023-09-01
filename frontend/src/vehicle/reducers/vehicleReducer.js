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

const getAllVehiclesReducer = (vehicles, action) => {
  switch (action.type) {
    case GET_ALL_VEHICLE_REQUEST:
      return { loading: true };
    case GET_ALL_VEHICLE_REQUEST_SUCCESS:
      return { loading: false, vehicles: action.payload };
    case GET_ALL_VEHICLE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return vehicles;
  }
};

const getVehicleByIdReducer = (vehicle, action) => {
  switch (action.type) {
    case GET_VEHICLE_BY_ID_REQUEST:
      return { loading: true };
    case GET_VEHICLE_BY_ID_REQUEST_SUCCESS:
      return { loading: false, vehicle: action.payload };
    case GET_VEHICLE_BY_ID_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return vehicle;
  }
};

const createVehicleReducer = (vehicle, action) => {
  switch (action.type) {
    case CREATE_VEHICLE_REQUEST:
      return { loading: true };
    case CREATE_VEHICLE_REQUEST_SUCCESS:
      return { loading: false, success: true, vehicle: action.payload };
    case CREATE_VEHICLE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return vehicle;
  }
};

const deleteVehicleReducer = (vehicle, action) => {
  switch (action.type) {
    case DELETE_VEHICLE_REQUEST:
      return { loading: true };
    case DELETE_VEHICLE_REQUEST_SUCCESS:
      return { loading: false, success: true, vehicle: action.payload };
    case DELETE_VEHICLE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return vehicle;
  }
};

const updateVehicleReducer = (vehicle, action) => {
  switch (action.type) {
    case UPDATE_VEHICLE_REQUEST:
      return { loading: true };
    case UPDATE_VEHICLE_REQUEST_SUCCESS:
      return { loading: false, success: true, vehicle: action.payload };
    case UPDATE_VEHICLE_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return vehicle;
  }
};

export {
  getAllVehiclesReducer,
  getVehicleByIdReducer,
  createVehicleReducer,
  deleteVehicleReducer,
  updateVehicleReducer,
};
