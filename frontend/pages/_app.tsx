import App from 'next/app';
import '../styles/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@components/layout/Layout';
import * as Fathom from 'fathom-client';

const MyApp = ({ Component, data, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('LWOPLBLT', {
      includedDomains: ['tinybox.dev', 'www.tinybox.dev'],
    });
    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete);
    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  // TODO Put all generic app data here
  const data = {
    hello: 'world',
  };
  return { data, ...appProps };
};

export default MyApp;
