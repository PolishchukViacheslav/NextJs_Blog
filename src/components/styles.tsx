import styled, { createGlobalStyle } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100px;
  padding-top: 20px;
  justify-content: space-around;
  background-color: #d0eeec;
`;

export const Button = styled.a`
  display: inline-block;
  height: fit-content;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
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

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
