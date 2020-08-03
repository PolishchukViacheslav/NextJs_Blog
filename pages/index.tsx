import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Post } from '../interfaces';
import { useDispatch } from 'react-redux';
import { getPosts } from '../redux/store';
import Link from 'next/link';
import { POST_URL } from '../API/config';
import { Layout } from '../API/Layout';

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

interface HomeProps {
  posts: Post[];
}

const Home: FC<HomeProps> = ({ posts }) => {
  // const [posts, setPosts] = useState([]);
  // const posts = useSelector((state: InitialState) => state.posts);
  // console.log(posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const { data } = await axios.get(POST_URL);
  const posts = data;
  return { props: { posts } };
};

export default Home;
