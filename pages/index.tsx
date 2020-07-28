import React, { FC } from 'react';
import { Main } from '../components/Main';
import Link from 'next/link';

const Home: FC = () => (
  <>
    <Link href="/">
      <a>Blog</a>
    </Link>{' '}
    <Link href="/posts/new">
      <a>Create new post</a>
    </Link>
    <Main />
  </>
);

export default Home;
