import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const getRequest = async (endpoint) => {
  return await axios.get(endpoint, config);
};

const postRequest = async (endpoint, postObject) => {
  return await axios.post(endpoint, postObject, config);
};

const deleteRequestById = async (endpoint, id) => {
  return await axios.delete(endpoint + `/${id}`, config);
};

const putRequest = async (endpoint, putObject) => {
  return await axios.put(endpoint, putObject, config);
};

export { getRequest, postRequest, deleteRequestById, putRequest };
