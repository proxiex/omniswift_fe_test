import { getAllGenderRequest } from '../../api/endpoints'
import { getAllGender, getGenderLoading, error } from './slice'
import { actionFn } from '../../utils/redux-action-fn'

const getAllGenderAction = () => actionFn(
  getGenderLoading,
  getAllGenderRequest,
  getAllGender,
  error
)
    
export { getAllGenderAction };
