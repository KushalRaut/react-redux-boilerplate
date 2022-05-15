import {
  ADD_REQUEST,
  ADD_SUCCESS,
  ADD_FAILURE,
  SUB_REQUEST,
  SUB_FAILURE,
  SUB_SUCCESS,
  RESET_REQUEST,
  RESET_FAILURE,
  RESET_SUCCESS,
} from '../constants/countConstants';

export const featureReducers = (
  state = { loading: false, value: 0, isError: false },
  action
) => {
  switch (action.type) {
    case ADD_REQUEST:
    case SUB_REQUEST:
    case RESET_REQUEST:
      return {
        loading: true,
      };
    case ADD_SUCCESS:
      return {
        loading: false,
        value: action.payload.currentValue,
      };
    case SUB_SUCCESS:
      return {
        loading: false,
        value: action.payload.currentValue,
      };
    case RESET_SUCCESS:
      return {
        loading: false,
        value: 0,
      };

    case ADD_FAILURE:
    case SUB_FAILURE:
    case RESET_FAILURE:
      return {
        loading: false,
        isError: true,
      };

    default:
      return {
        ...state,
      };
  }
};
