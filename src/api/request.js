import axios from "axios";
const baseURL = "https://test.omniswift.com.ng/api/";

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
