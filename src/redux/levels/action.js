import axios from "axios";

import { getAllLevelsRequest } from '../../api/endpoints'
import { getAllLevels, getLevelsLoading, error } from './slice'
import { loadingType } from '../../constants/loading'

const getAllLevelsAction = () => {
    return async (dispatch) => {
        try {
          dispatch(getLevelsLoading(loadingType.loading));
          const response = await getAllLevelsRequest();
          dispatch(getAllLevels(response));
          dispatch(getLevelsLoading(loadingType.complete));
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const serverError = err;
            if (serverError && serverError.response) {
              dispatch(error(serverError.response.data));
              dispatch(getLevelsLoading(loadingType.idle));
            }
          }
          return { errorMessage: "An error occurred!" };
        }
      };
    };
    
export { getAllLevelsAction };
