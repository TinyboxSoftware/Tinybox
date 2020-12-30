import About from '@components/sections/About';
import Hero from '@components/sections/Hero';
import { client } from '@utils/sanity';
import groq from 'groq';

const Index = ({ pageContent }) => {
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-screen">
      {pageContent.sections.map((section, idx) => {
        switch (section._type) {
          case 'heroSection':
            return <Hero data={section} />;
          case 'aboutSection':
            return <About data={section} />;
          default:
            return;
        }
      })}
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
