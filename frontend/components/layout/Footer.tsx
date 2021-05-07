import Newsletter from '../sections/Newsletter';

const Footer = () => {
  return (
    <footer className="px-4 bg-gray-900 lg:px-0">
      <div className="flex flex-col items-center justify-between w-full px-0 py-12 mx-auto border-t border-gray-800 lg:px-4 md:flex-row max-w-7xl">
        <p className="text-gray-300">
          © {new Date().getFullYear()} Tinybox Software Development. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
