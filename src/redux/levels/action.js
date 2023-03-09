import { getAllLevelsRequest } from '../../api/endpoints'
import { getAllLevels, getLevelsLoading, error } from './slice'

import { actionFn } from '../../utils/redux-action-fn'


const getAllLevelsAction = () => actionFn(
  getLevelsLoading,
  getAllLevelsRequest,
  getAllLevels,
  error
)
    
export { getAllLevelsAction };
