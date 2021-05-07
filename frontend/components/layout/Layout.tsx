import Footer from './Footer';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
