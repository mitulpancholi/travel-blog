import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/layout";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
 html {
  line-height: 200%;
  font-kerning: normal;
 }
 
  body {
    font-family: 'Poppins', sans-serif;
    /* background-color: #E5E5E5; */

    height: 100%;
    width: 100%;
    position: relative;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;
 /* Firefox */
    ::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
    }
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  button {
   
  }
`;

const theme = {
  colors: {
    primary: "#46494c",
    secondary: "#CC2936",
    white: "#f0f2ef",
    border: "#CBD4C2",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
