import { getAllStateRequest } from '../../api/endpoints'
import { getAllStates, getStatesLoading, error } from './slice'

import { actionFn } from '../../utils/redux-action-fn'


const getAllStatesAction = () => actionFn(
  getStatesLoading,
  getAllStateRequest,
  getAllStates,
  error
)
    
export { getAllStatesAction };
