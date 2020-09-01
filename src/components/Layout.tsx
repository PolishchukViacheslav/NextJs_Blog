import React, { FC } from 'react';
import Link from 'next/link';
import { Wrapper, Button, GlobalStyle } from './styles';

export const Layout: FC = ({ children }) => (
  <>
    <Wrapper>
      <Link href="/">
        <Button>Blog</Button>
      </Link>{' '}
      <Link href="/posts/new">
        <Button>Create new post</Button>
      </Link>
    </Wrapper>
    {children}
    <GlobalStyle />
  </>
);
