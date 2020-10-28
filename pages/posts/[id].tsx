import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { Layout } from '../../src/components/Layout';
import { Post } from '../../src/interfaces';
import { URL } from '../../src/API/config';
import axios from 'axios';
import { PostWrapper } from '../../src/components/styles';

interface PostWithIdProps {
  post: Post;
}

const PostWithID: FC<PostWithIdProps> = ({ post }) => {
  return (
    <Layout>
      <PostWrapper>
        <h1>{post.title}</h1>
        <article>{post.body}</article>
      </PostWrapper>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query: { id } }) => {
  const { data: post } = await axios.get(URL + '/' + id);

  return { props: { post } };
};

export default PostWithID;
