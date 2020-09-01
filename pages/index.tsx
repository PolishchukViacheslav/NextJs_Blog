import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import { Post, State } from '../src/interfaces';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { POST_URL } from '../src/API/config';
import { Layout } from '../src/components/Layout';
import { setPosts } from '../src/redux/reducer';
import { wrapper } from '../src/redux/store';
import { GlobalStyle } from '../src/components/styles';

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

const Home: NextPage = () => {
  const { posts } = useSelector<State, State>((state) => state);
  console.log(posts);
  return (
    <>
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
      {/* <GlobalStyle /> */}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const { data } = await axios.get<Post[]>(POST_URL);

  store.dispatch(setPosts(data));

  return { props: {} };
});

export default Home;
