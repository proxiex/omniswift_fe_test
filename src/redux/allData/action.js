import {
  getAllDataRequest,
  filterDataRequest,
  viewResultRequest,
} from '../../api/endpoints'
import {
  getAllData,
  getAllDataLoading,
  filterAllData,
  viewResults,
  error 
} from './slice'
import { actionFn } from '../../utils/redux-action-fn'

const getAllDataAction = () => actionFn(
  getAllDataLoading,
  getAllDataRequest,
  getAllData,
  error
)

const filterAllDataAction = (data) => actionFn(
  getAllDataLoading,
  filterDataRequest,
  filterAllData,
  error,
  data
)

const viewResultActon = (data) => actionFn(
  getAllDataLoading,
  viewResultRequest,
  viewResults,
  error,
  data
)
    
export { getAllDataAction, filterAllDataAction, viewResultActon };
