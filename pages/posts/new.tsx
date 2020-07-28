import React, { FC } from 'react';
import Link from 'next/link';

const NewPost: FC = () => (
  <>
    <Link href="/">
      <a>Blog</a>
    </Link>{' '}
    <Link href="/new">
      <a>Create new post</a>
    </Link>
    <h2>New Post</h2>
  </>
);

export default NewPost;
