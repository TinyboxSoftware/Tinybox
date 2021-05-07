import About from '@components/sections/About';
import Hero from '@components/sections/Hero';
import Newsletter from '@components/sections/Newsletter';
import { client } from '@utils/sanity';
import groq from 'groq';
import Head from 'next/head';

const Index = ({ pageContent }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen pt-20 lg:pt-0">
      <Head>
        <title>Tinybox: Home</title>
      </Head>
      {pageContent.sections.map((section, idx) => {
        switch (section._type) {
          case 'heroSection':
            return <Hero page={pageContent} section={section} />;
          default:
            return;
        }
      })}
      <Newsletter />
    </div>
  );
};

export async function getStaticProps(context) {
  const pageContent = await client.fetch(groq`
  *[_type == "homepage" && _id == "homepage"]`);

  return {
    props: {
      pageContent: pageContent[0],
    },
  };
}

export default Index;
