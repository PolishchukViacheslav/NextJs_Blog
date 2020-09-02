export interface SetPosts {
  type: string;
  payload: Post[] | Post;
}

export interface Post {
  id: number | string;
  title: string;
  body: string;
}

export interface State {
  posts: Post[];
  errorMessage: null | string;
}
