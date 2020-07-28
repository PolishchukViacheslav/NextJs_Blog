import React, { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Post, InitialState } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/store';
import Link from 'next/link';
// import styled from 'styled-components';

export const Main: FC = () => {
  // const [posts, setPosts] = useState<Post[]>([]);
  // useEffect(() => {
  //   axios.get('https://simple-blog-api.crew.red/posts').then((response) => setPosts(response.data));
  // }, [posts]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const articles = useSelector((state: InitialState) => state.posts);
  console.log(articles);

  return (
    <>
      {/* <h1>sdfb</h1> */}
      {articles.map((post) => (
        <div key={post.id}>
          <Link
            href={{
              pathname: '/posts/[id]',
              query: {
                title: post.title,
                body: post.body,
              },
            }}
            as={`/posts/:${post.id}`}
          >
            <a>{post.title}</a>
          </Link>
        </div>
      ))}
    </>
  );
};
