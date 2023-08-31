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

const getAllBrandsReducer = (brands, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS_REQUEST:
      return { loading: true };
    case GET_ALL_BRANDS_REQUEST_SUCCESS:
      return { loading: false, brands: action.payload };
    case GET_ALL_BRANDS_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return brands;
  }
};

const createBrandReducer = (brand, action) => {
  switch (action.type) {
    case CREATE_BRAND_REQUEST:
      return { loading: true };
    case CREATE_BRAND_REQUEST_SUCCESS:
      return { loading: false, success: true, brand: action.payload };
    case CREATE_BRAND_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return brand;
  }
};

const deleteBrandReducer = (brand, action) => {
  switch (action.type) {
    case DELETE_BRAND_REQUEST:
      return { loading: true };
    case DELETE_BRAND_REQUEST_SUCCESS:
      return { loading: false, success: true, brand: action.payload };
    case DELETE_BRAND_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return brand;
  }
};

const updateBrandReducer = (brand, action) => {
  switch (action.type) {
    case UPDATE_BRAND_REQUEST:
      return { loading: true };
    case UPDATE_BRAND_REQUEST_SUCCESS:
      return { loading: false, success: true, brand: action.payload };
    case UPDATE_BRAND_REQUEST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return brand;
  }
};

export {
  getAllBrandsReducer,
  createBrandReducer,
  deleteBrandReducer,
  updateBrandReducer,
};
