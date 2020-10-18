import Navbar from './nav/Navbar';

const Layout = ({ children }) => {
  return (
    <main>
      <nav> {/* TODO add a navbar component */}</nav>
      {children}
      <footer>{/* TODO add a basic footer component */}</footer>
    </main>
  );
};

export default Layout;
