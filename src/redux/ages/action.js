import { getAllAgesRequest } from '../../api/endpoints'
import { getAgesLoading, getAllAges, error } from './slice'
import { actionFn } from '../../utils/redux-action-fn'

const getAllAgesAction = () => actionFn(
  getAgesLoading,
  getAllAgesRequest,
  getAllAges,
  error
)
    
export { getAllAgesAction };
