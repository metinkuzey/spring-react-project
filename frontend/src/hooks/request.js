import axios from "axios";
import { axiosPrivate } from "../api/axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const configPrivate = {
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
};

const getRequest = async (endpoint) => {
  return await axios.get(endpoint, config);
};

const getRequestById = async (endpoint, id) => {
  return await axios.get(endpoint + `/${id}`, config);
};

const postRequest = async (endpoint, postObject) => {
  return await axios.post(endpoint, postObject, config);
};

const postRequestWithCookie = async (endpoint) => {
  return await axios.post(endpoint, configPrivate);
};

const postRequestPrivate = async (endpoint) => {
  return await axiosPrivate.post(endpoint, configPrivate);
};

const deleteRequestById = async (endpoint, id) => {
  return await axios.delete(endpoint + `/${id}`, config);
};

const putRequest = async (endpoint, putObject) => {
  return await axios.put(endpoint, putObject, config);
};

export {
  getRequest,
  postRequestPrivate,
  postRequestWithCookie,
  getRequestById,
  postRequest,
  deleteRequestById,
  putRequest,
};
