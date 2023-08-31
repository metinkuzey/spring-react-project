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

const getAllModelsReducer = (models, action) => {
  switch (action.type) {
    case GET_ALL_MODEL_REQUEST:
      return { loading: true };
    case GET_ALL_MODEL_REQUEST_SUCCESS:
      return { loading: false, models: action.payload };
    case GET_ALL_MODEL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return models;
  }
};

const getModelByIdReducer = (model, action) => {
  switch (action.type) {
    case GET_MODEL_BY_ID_REQUEST:
      return { loading: true };
    case GET_MODEL_BY_ID_REQUEST_SUCCESS:
      return { loading: false, model: action.payload };
    case GET_MODEL_BY_ID_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return model;
  }
};

const createModelReducer = (model, action) => {
  switch (action.type) {
    case CREATE_MODEL_REQUEST:
      return { loading: true };
    case CREATE_MODEL_REQUEST_SUCCESS:
      return { loading: false, success: true, model: action.payload };
    case CREATE_MODEL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return model;
  }
};

const deleteModelReducer = (model, action) => {
  switch (action.type) {
    case DELETE_MODEL_REQUEST:
      return { loading: true };
    case DELETE_MODEL_REQUEST_SUCCESS:
      return { loading: false, success: true, model: action.payload };
    case DELETE_MODEL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return model;
  }
};

const updateModelReducer = (model, action) => {
  switch (action.type) {
    case UPDATE_MODEL_REQUEST:
      return { loading: true };
    case UPDATE_MODEL_REQUEST_SUCCESS:
      return { loading: false, success: true, model: action.payload };
    case UPDATE_MODEL_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return model;
  }
};

export {
  getAllModelsReducer,
  getModelByIdReducer,
  createModelReducer,
  deleteModelReducer,
  updateModelReducer,
};
