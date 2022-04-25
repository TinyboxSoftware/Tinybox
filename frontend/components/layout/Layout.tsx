import Footer from './Footer';
import Navigation from './Navigation';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tinybox Software development works with businesses in the Fraser Valley to create software solutions to sales problems. Specializing in Shopify, and custom web solutions."
        />
        <meta name="theme-color" content="#4C51BF" />
        <link
          rel="icon"
          type="image/svg"
          href="https://res.cloudinary.com/tinbyox/image/upload/v1620228763/Tinybox_Logo_No_border_boqctm.svg"
        ></link>
        <script async defer data-website-id="73d6e38f-0592-4ade-a08d-2924562ed308" src="https://analytics.tbx.sh/umami.js"></script>
      </Head>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
