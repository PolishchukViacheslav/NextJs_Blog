import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import { Post } from '../interfaces';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/store';
import Link from 'next/link';
import { GET_URL } from '../API/config';

interface HomeProps {
  posts: Post[];
}

const Home: FC<HomeProps> = ({ posts }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <Link href="/">
        <a>Blog</a>
      </Link>{' '}
      <Link href="/posts/new">
        <a>Create new post</a>
      </Link>
      {posts.map((post) => (
        <div key={post.id}>
          <Link
            href={{
              pathname: '/posts/[id]',
              query: {
                title: post.title,
                body: post.body,
                idi: post.id,
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async (ctx) => {
  const { data } = await axios.get(GET_URL);
  const posts = data;
  return { props: { posts } };
};

export default Home;
