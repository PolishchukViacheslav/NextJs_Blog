import React, { FC } from 'react';
import Link from 'next/link';

export const Layout: FC = ({ children }) => (
  <>
    <Link href="/">
      <a>Blog</a>
    </Link>{' '}
    <Link href="/posts/new">
      <a>Create new post</a>
    </Link>
    {children}
  </>
);
