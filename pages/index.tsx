import React from 'react';
import { NextPage } from 'next';
import axios from 'axios';
import { Post, State } from '../src/interfaces';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { POST_URL } from '../src/API/config';
import { Layout } from '../src/components/Layout';
import { setPosts } from '../src/redux/reducer';
import { wrapper } from '../src/redux/store';
import { BlogList, Blog, BlogListTitle } from '../src/components/styles';

const Home: NextPage = () => {
  const { posts } = useSelector<State, State>((state) => state);
  console.log(posts);
  return (
    <>
      <Layout>
        <BlogListTitle>Choose a blog to read from next titles:</BlogListTitle>
        <BlogList>
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
              {post.title ? <Blog>{post.title}</Blog> : ''}
            </Link>
          ))}
        </BlogList>
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
