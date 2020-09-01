import React, { FC } from 'react';
import Link from 'next/link';
import { HeaderWrapper, Button, GlobalStyle, MainContainer } from './styles';

export const Layout: FC = ({ children }) => (
  <MainContainer>
    <HeaderWrapper>
      <Link href="/">
        <Button>Blog</Button>
      </Link>{' '}
      <Link href="/posts/new">
        <Button>Create new post</Button>
      </Link>
    </HeaderWrapper>
    {children}
    <GlobalStyle />
  </MainContainer>
);
