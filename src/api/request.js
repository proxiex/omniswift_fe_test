import axios from "axios";
const baseURL = "http://44.200.59.57/api/v1";

let customAxios = axios.create({
  baseURL,
});

export const request = (req) => {
  try {
    const { method, url, data } = req;
    return customAxios.request({
      method,
      url,
      data,
    });
  } catch (error) {
    return error;
  }
};

export default customAxios;
