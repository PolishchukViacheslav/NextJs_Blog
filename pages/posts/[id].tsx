import React, { FC, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { InitialState, Post } from '../../interfaces';
import { POST_URL } from '../../API/config';
import { Layout } from '../../API/Layout';

interface ServerSidePost {
  post: Post;
}

const PostWithID: FC<ServerSidePost> = (props) => {
  console.log(props);
  const {
    query: { id },
  } = useRouter();
  let postDynamic = useSelector((state: InitialState) => {
    console.log(state.posts);
    return state.posts.find((post) => post.id.toString() === id);
  });
  useEffect(() => {
    console.log(postDynamic);
    if (!postDynamic) {
      console.log(postDynamic);
      postDynamic = props.post;
    }
  }, []);
  return (
    <>
      <Layout>
        <h1>{props.post.title}</h1>
        <article>{props.post.body}</article>
      </Layout>
    </>
  );
};

export default PostWithID;

export const getServerSideProps: GetServerSideProps<ServerSidePost> = async ({ query }) => {
  const { data } = await axios.get(POST_URL + '/' + query.id);
  console.log(query);
  const post = data;
  console.log(post);
  return { props: { post } };
};
