import styled, { createGlobalStyle, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const maxWidth = '1000px';

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100vw;
  padding-top: 20px;
  justify-content: space-around;
  background-color: #d0eeec;
`;

export const Button = styled.button`
  display: inline-block;
  height: fit-content;
  color: #fff;
  text-transform: uppercase;
  /* text-decoration: none; */
  background: #60a3bc;
  padding: 10px;
  border-radius: 10px;
  border: none;
  transition: text-shadow 0.4s ease 0s, box-shadow 0.4s ease 0s, -webkit-box-shadow 0.4s ease 0s,
    -moz-box-shadow 0.4s ease 0s;
  &:hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: text-shadow 0.4s ease 0s, -webkit-box-shadow 0.4s ease 0s,
      -moz-box-shadow 0.4s ease 0s;
  }
`;

export const AddPostButton = styled(Button)`
  transition: background-color 0.4s ease 0s;
  &:hover {
    background-color: #a3a3bc;
    text-shadow: none;
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    transition: background-color 0.4s ease 0s;
  }
`;

export const EmptyPostMessage = styled.span`
  display: inline-block;
  animation: ${rotate360} 3s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  color: lightcoral;
`;

export const AddNewPostForm = styled.form`
  display: grid;
  place-items: center;
  height: 50vh;
`;

export const FormTypingPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PostWrapper = styled.div`
  max-width: ${maxWidth};
  display: block;
  margin: 0 auto;
`;

export const BlogList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: ${maxWidth};
  padding: 0 25px;
  list-style: none;
`;

export const BlogListTitle = styled.h1`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid lightgrey;
`;

export const Blog = styled.li`
  padding: 10px;
  margin: 10px;
  width: max-content;
  cursor: pointer;
  border-radius: 25px;
  background-color: #5963ec;
  color: #fff;
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
