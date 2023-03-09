import { request } from "./request";

const getAllLevelsRequest = (data) =>
  request({ url: "/viewAllLevels", data });

const getAllStateRequest = (data) =>
  request({ url: "/viewAllStates", data });

const getAllGenderRequest = (data) =>
  request({ url: "/viewAllGender", data });

const getAllAgesRequest = (data) =>
  request({ url: "/viewAllAges", data });

const getAllDataRequest = (data) =>
  request({ url: "/viewAllData", data });

const filterDataRequest = (data) =>
  request({ url: "/filterData", data, method: 'post' });

const viewResultRequest = (data) =>
  request({ url: `/viewResult/${data.id}`, data });

export {
  getAllLevelsRequest,
  getAllAgesRequest,
  getAllDataRequest,
  getAllGenderRequest,
  getAllStateRequest,
  filterDataRequest,
  viewResultRequest,
}