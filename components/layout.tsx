import React, { FC } from 'react';
import Link from 'next/link';

export const Layout: FC = ({ children }) => {
  console.log(children);
  return (
    <>
      <Link href="/">
        <a>Blog</a>f
      </Link>
      <Link href="/Create post">
        <a>Create Post</a>
      </Link>
      {children}
    </>
  );
};
