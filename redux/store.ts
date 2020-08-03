import { createStore, applyMiddleware, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import reducer, { setLoading, fetchDataFulfilled, fetchDataRejected } from './reducer';
import { POST_URL } from '../API/config';
import axios from 'axios';
import { Dispatch } from 'react';
import { composeWithDevTools } from 'redux-devtools-extension';

export const getPosts = () => {
  return async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(setLoading(true));
      const { data } = await axios.get(POST_URL);
      dispatch(fetchDataFulfilled(data));
    } catch (error) {
      dispatch(fetchDataRejected(error));
    }
  };
};

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
