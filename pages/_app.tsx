import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Link from 'next/link';
import { withRouter } from 'next/router';

import theme from 'utils/theme';
import Layout from 'components/Layout';
import Footer from 'components/Footer';
import cssReset from 'utils/cssReset';
import Spacer from 'components/Spacer';
import { homePage } from 'utils/routes';

import type { AppProps } from 'next/app';

const GlobalStyle = createGlobalStyle`
  ${cssReset}
`;

const App = ({ router, Component, pageProps }: AppProps) => (
  <>
    <Layout>
      <Head>
        <title>Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Spacer />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
    <Footer>
      <Spacer />
      <p>Created in 2021</p>
      {router.route !== homePage && (
        <p>
          <Link href={homePage}>Home</Link>
        </p>
      )}
    </Footer>
  </>
);
App.displayName = 'App';

export default withRouter(App);
