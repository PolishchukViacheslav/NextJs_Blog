[DEMO](https://develops-today-tt.vercel.app/)

# This example demonstrate how to use NextJS + Redux + Styled-components in ssr

## Example app with styled-components

This example features how you use a different styling solution than [styled-jsx](https://github.com/zeit/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

For this purpose we are using a `helper function` [createGlobalStyle](https://styled-components.com/docs/api#helpers) to generate a special StyledComponent that handles global styles and placing it at the top of React tree and the global styles will be injected when the component is "rendered".

<details>
  <summary>Step by step config</summary>
  <p>
    The steps themselves are just four:

  - Install styled-components
  - Create the custom _document.js file (you can copy the contents from the [official example code](https://github.com/zeit/next.js/blob/master/examples/with-styled-components/pages/_document.js))
  - Install styled components [Babel plugin](https://github.com/styled-components/babel-plugin-styled-components)
  - Create the .babelrc file (you can copy the contents from [the official example code](https://github.com/zeit/next.js/blob/master/examples/with-styled-components/.babelrc))
  </p>
</details>

## With Redux Wrapper Example

Usually splitting your app state into `pages` feels natural but sometimes you'll want to have global state for your app. This is an example on how you can use redux that also works with our universal rendering approach. This is just a way you can do it but it's not the only one.
### We need to install next dependencies:
- redux
- redux-react
- next-redux-wrapper

## Getting Started
 - clone Repo to your PC 
 - run `npm install` (`yarn install`) for installing all dependencies
 - run `npm run dev` (`yarn dev`)
 - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
 Now You can start editing the page by modifying pages/*.tsx The page auto-updates as you edit the file.
