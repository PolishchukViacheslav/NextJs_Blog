import React, { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Post } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/store';

export const Main: FC = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   axios.get('https://simple-blog-api.crew.red/posts').then((response) => setPosts(response.data));
  // }, [posts]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const articles = useSelector((state) => ({
    posts: state.posts,
    loading: state.loading,
  }));

  return (
    <>
      {articles.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};
