import axios from "axios";
import { loadingType } from '../constants/loading'

export const actionFn = (loaderFn, reqFn, sliceFn, error, data={}) => {
    return async (dispatch) => {
        try {
          dispatch(loaderFn(loadingType.loading));
          const response = await reqFn(data);
          dispatch(sliceFn(response?.data));
          dispatch(loaderFn(loadingType.complete));
        } catch (err) {
          if (axios.isAxiosError(err)) {
            const serverError = err;
            if (serverError && serverError.response) {
              dispatch(error(serverError.response.data));
              dispatch(loaderFn(loadingType.idle));
            }
          }
          return { errorMessage: "An error occurred!" };
        }
    };
  };