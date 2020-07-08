import { handleActions } from 'redux-actions';

import axios from 'axios';

const GET_TODAY_PENDING = 'GET_TODAY_PENDING';
const GET_TODAY_SUCCESS = 'GET_TODAY_SUCCESS';
const GET_TODAY_FAILURE = 'GET_TODAY_FAILURE';

function todayCompleteApi() {
  return axios.get('http://localhost:3000/mypage/todaycomplete', {
    withCredentials: true,
  });
}

const initialState = {
  pending: false,
  error: false,
  data: [],
};

export const postTodayComplete = () => (dispatch) => {
  dispatch({ type: GET_TODAY_PENDING });

  return todayCompleteApi()
    .then((result) => {
      dispatch({
        type: GET_TODAY_SUCCESS,
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_TODAY_FAILURE,
        payload: error,
      });
    });
};

export default handleActions(
  {
    [GET_TODAY_PENDING]: (state, action) => {
      return {
        ...state,
        pending: true,
        error: false,
      };
    },
    [GET_TODAY_SUCCESS]: (state, action) => {
      return {
        ...state,
        pending: false,
        data: action.payload,
      };
    },
    [GET_TODAY_FAILURE]: (state, action) => {
      return {
        ...state,
        pending: false,
        error: true,
      };
    },
  },
  initialState,
);
