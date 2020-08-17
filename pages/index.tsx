import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Post, State } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { POST_URL } from '../API/config';
import { Layout } from '../API/Layout';
import { setPosts } from '../redux/reducer';
import { wrapper } from '../redux/store';

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 25px;
  list-style: none;
`;

const Li = styled.li`
  padding: 10px;
  margin: 10px;
  width: max-content;
  cursor: pointer;
  border-radius: 25px;
  background-color: #5963ec;
  color: #fff;
`;

const Home: FC = () => {
  const { posts } = useSelector<State, State>((state) => state);

  return (
    <Layout>
      <Ul>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={{
              pathname: '/posts/[id]',
              query: {
                title: post.title,
                body: post.body,
                idi: post.id,
              },
            }}
            as={`/posts/${post.id}`}
          >
            <Li>{post.title}</Li>
          </Link>
        ))}
      </Ul>
    </Layout>
  );
};

// eslint-disable-next-line
export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { data } = await axios.get<Post[]>(POST_URL);

  store.dispatch(setPosts(data));

  return { props: {} };
});

export default Home;
