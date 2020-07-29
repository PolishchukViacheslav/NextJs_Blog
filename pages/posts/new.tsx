import React, { FC, useState } from 'react';
import { v4 as idGenerator } from 'uuid';
import axios from 'axios';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setPost } from '../../redux/reducer';
import { POST_URL } from '../../API/config';

const NewPost: FC = () => {
  const [title, addTitle] = useState<string>('');
  const [body, addBody] = useState<string>('');
  const [isEmpty, addIsEmpty] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const preTitle = title.trim();
    const preBody = body.trim();
    const post = {
      id: idGenerator(),
      title: preTitle,
      body: preBody,
    };

    if (!preBody || !preTitle) {
      addIsEmpty(true);
      return;
    }

    dispatch(setPost(post));
    axios
      .post(POST_URL, post)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    addTitle('');
    addBody('');

    return;
  };
  return (
    <>
      <Link href="/">
        <a>Blog</a>
      </Link>{' '}
      <Link href="/new">
        <a>Create new post</a>
      </Link>
      <form onSubmit={handleSubmit}>
        {isEmpty && <span>Enter some data</span>}
        <div>
          <label htmlFor="title">
            <div>Title:</div>
            <input
              type="text"
              value={title}
              onChange={(e) => addTitle(e.target.value.trimStart())}
              placeholder="Post Title"
            />
          </label>
          <label htmlFor="title">
            <div>Body:</div>
            <textarea
              value={body}
              onChange={(e) => addBody(e.target.value.trimStart())}
              placeholder="Post Title"
            />
          </label>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </>
  );
};

export default NewPost;