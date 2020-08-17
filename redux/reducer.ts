import { Post, State, SetPosts } from '../interfaces';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

export const initialState: State = {
  posts: [],
  errorMessage: null,
};

const SET_POSTS = 'SET_POSTS';

export const setPosts = (post: Post[]): SetPosts => ({
  type: SET_POSTS,
  payload: post,
});

export const reducer = (state = initialState, action: AnyAction): State => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === 'init') delete action.payload.app;
      if (action.payload.page === 'init') delete action.payload.page;
      return { ...state, ...action.payload };

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
