import Head from 'next/head';

const FourOhFour = () => {
  return (
    <div className="grid w-full min-h-screen bg-gray-900 place-items-center">
      <Head>
        <title>Tinybox: 404</title>
      </Head>
      <section className="px-4">
        <h1 className="block text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
          404
        </h1>
        <h2 className="block mb-4 text-xl font-extrabold leading-tight tracking-tight text-gray-100 md:text-2xl">
          Uh Oh, looks like this page doesn't exist...
        </h2>
        <p>It looks like you got lost</p>
        <a href="/">take me to the home page</a>
      </section>
    </div>
  );
};

export default FourOhFour;
