import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  height: 100px;
  padding-top: 20px;
  justify-content: space-around;
  background-color: #d0eeec;
`;
const Anchor = styled.a`
  height: fit-content;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0 10px;
  border: 2px solid palevioletred;
  border-radius: 25px;
`;

export const Layout: FC = ({ children }) => (
  <>
    <Div>
      <Link href="/">
        <Anchor>Blog</Anchor>
      </Link>{' '}
      <Link href="/posts/new">
        <Anchor>Create new post</Anchor>
      </Link>
    </Div>
    {children}
  </>
);
