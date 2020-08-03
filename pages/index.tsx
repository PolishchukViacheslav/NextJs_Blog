import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Post, InitialState } from '../interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/store';
import Link from 'next/link';
import { POST_URL } from '../API/config';
import { Layout } from '../API/Layout';
// import { store } from '../redux/store';
import { fetchDataFulfilled } from '../redux/reducer';
import { wrapper } from './_app';

const Test = styled.a`
  border: 1px solid black;
  border-radius: 10px;
`;
const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

interface HomeProps {
  posts: Post[];
}

const Home: FC = () => {
  // const [posts, setPosts] = useState([]);
  const posts = useSelector((state: InitialState) => state.posts);
  console.log(posts);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);s

  return (
    <>
      <Layout>
        {/* {posts.map((post) => (
          <div key={post.id}>
            <Link
              href={{
                pathname: '/posts/[id]',
              }}
              as={`/posts/${post.id}`}
            >
              <a>{post.title}</a>
            </Link>
          </div>
        ))} */}
      </Layout>
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await axios.get(POST_URL);
//   console.log(data);

//   // store.dispatch(fetchDataFulfilled(data));

//   wrapper.getStaticProps(async ({ store }) => {
//     store.dispatch(fetchDataFulfilled(data));
//   });
//   return { props: {} };
// };

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const { data } = await axios.get(POST_URL);
    store.dispatch(fetchDataFulfilled(data));
  }
);

export default Home;
