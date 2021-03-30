import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: .875rem;
  }
`

const theme = {
  colors: {
    primary: '#212B59',
    secondary: '#FFFFFF',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        
        <title>Reports Prometeon</title>

        <link rel="shortcut icon" href="/images/favicon/favicon.ico" type="image/x-icon" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
