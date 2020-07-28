import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function PostWithID(): JSX.Element {
  const { query } = useRouter();
  return (
    <>
      <Link href="/">
        <a>Blog</a>
      </Link>{' '}
      <Link href="/posts/new">
        <a>Create new post</a>
      </Link>
      <h1>{query.title}</h1>
      <article>{query.body}</article>
    </>
  );
}
