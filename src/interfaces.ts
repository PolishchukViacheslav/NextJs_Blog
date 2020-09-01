export interface SetPosts {
  type: string;
  payload: Post[] | Post;
}

export interface Post {
  id: number | string;
  userId?: number;
  title: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface State {
  posts: Post[];
  errorMessage: null | string;
}