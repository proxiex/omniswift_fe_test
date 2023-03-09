import { request } from "./request";

const getAllLevelsRequest = (data) =>
  request({ url: "/viewAllLevels", data });


export {
    getAllLevelsRequest
}