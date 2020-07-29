export interface SetLoadingAction {
  type: string;
  payload: boolean;
}

export interface SetPost {
  type: string;
  payload: Post;
}

export interface Post {
  id: number | string;
  title: string;
  body: string;
}

export interface FetchDataFulfilled {
  type: string;
  payload: Post[];
  loading: boolean;
}

export interface FetchDataRejected {
  type: string;
  payload: string;
  loading: boolean;
}

export interface InitialState {
  posts: Post[];
  loading: boolean;
  errorMessage: null | string;
}
