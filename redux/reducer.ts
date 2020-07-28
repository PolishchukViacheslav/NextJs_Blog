import {
  SetLoadingAction,
  Post,
  FetchDataFulfilled,
  FetchDataRejected,
  InitialState,
} from '../interfaces';
import { AnyAction } from 'redux';
// import * as interfaces from '../'

export const initialState: InitialState = {
  posts: [],
  loading: true,
  errorMessage: null,
};
const GET_POSTS = 'GET_POSTS';
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED';
const GET_POSTS_REJECTED = 'GET_POSTS_REJECTED';

export const setLoading = (bool: boolean): SetLoadingAction => {
  return {
    type: GET_POSTS,
    payload: bool,
  };
};

export const fetchDataFulfilled = (data: Post[]): FetchDataFulfilled => {
  return {
    type: GET_POSTS_FULFILLED,
    payload: data,
    loading: false,
  };
};

export const fetchDataRejected = (error: string): FetchDataRejected => {
  return {
    type: GET_POSTS_REJECTED,
    payload: error,
    loading: false,
  };
};

const reducer = (state = initialState, action: AnyAction): InitialState => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_POSTS_FULFILLED:
      return {
        ...state,
        posts: action.payload,
        loading: action.loading,
      };
    case GET_POSTS_REJECTED:
      return {
        ...state,
        errorMessage: action.payload,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default reducer;
