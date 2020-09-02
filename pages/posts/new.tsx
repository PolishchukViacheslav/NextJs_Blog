import React, { FC, useState, SyntheticEvent } from 'react';
import { v4 as idGenerator } from 'uuid';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPosts } from '../../src/redux/reducer';
import { URL } from '../../src/API/config';
import { Layout } from '../../src/components/Layout';
import {
  AddPostButton,
  AddNewPostForm,
  FormTypingPartWrapper,
  EmptyPostMessage,
} from '../../src/components/styles';

const NewPost: FC = () => {
  const [title, addTitle] = useState('');
  const [body, addBody] = useState('');
  const [isEmpty, addIsEmpty] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (event: SyntheticEvent) => {
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

    dispatch(setPosts(post));
    axios
      .post(URL, post)
      .then((res) => {
        `Result : ${res}`;
      })
      .catch((err) => {
        `Error: ${err}`;
      });

    addTitle('');
    addBody('');

    return;
  };
  return (
    <Layout>
      <AddNewPostForm onSubmit={handleSubmit}>
        {isEmpty && <EmptyPostMessage>Enter some data</EmptyPostMessage>}
        <FormTypingPartWrapper>
          <label htmlFor="blog_title">
            Title:
            <input
              id="blog_title"
              type="text"
              value={title}
              onChange={(e) => addTitle(e.target.value.trimStart())}
              placeholder="Post Title"
            />
          </label>
          <label htmlFor="blog_body">
            <div>Body:</div>
            <textarea
              id="blog_body"
              value={body}
              onChange={(e) => addBody(e.target.value.trimStart())}
              placeholder="start typing your thoughts here"
              cols={50}
              rows={7}
            />
          </label>
          <AddPostButton type="submit">Add Post</AddPostButton>
        </FormTypingPartWrapper>
      </AddNewPostForm>
    </Layout>
  );
};

export default NewPost;
