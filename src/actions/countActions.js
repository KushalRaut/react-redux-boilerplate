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

export const add = (currentValue) => (dispatch) => {
  try {
    dispatch({ type: ADD_REQUEST });

    dispatch({
      type: ADD_SUCCESS,
      payload: { currentValue: currentValue + 1 },
    });
  } catch (error) {
    dispatch({
      type: ADD_FAILURE,
    });
  }
};
export const sub = (currentValue) => (dispatch) => {
  try {
    dispatch({ type: SUB_REQUEST });

    dispatch({
      type: SUB_SUCCESS,
      payload: { currentValue: currentValue - 1 },
    });
  } catch (error) {
    dispatch({ type: SUB_FAILURE });
  }
};
export const reset = () => (dispatch) => {
  try {
    dispatch({ type: RESET_REQUEST });

    dispatch({ type: RESET_SUCCESS });
  } catch (error) {
    dispatch({ type: RESET_FAILURE });
  }
};
