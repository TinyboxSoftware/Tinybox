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
            // return <About data={section} />;
            return (
              <div>
                <div className="w-full">
                  <h4 className="text-sm font-bold text-indigo-600 uppercase">
                    OUR PROJECTS
                  </h4>
                  <h2 className="text-2xl font-bold">
                    What we've been working on
                  </h2>
                  <p className="text-gray-700">
                    Here's a few projects we've been working on lately
                  </p>
                </div>
                <div className="flex gap-4 my-8 flex-cols">
                  <article
                    className="bg-yellow-200 w-96"
                    style={{ height: '400px' }}
                  >
                    This is a project
                  </article>
                  <article
                    className="bg-indigo-200 w-96"
                    style={{ height: '400px' }}
                  >
                    This is a project
                  </article>
                  <article
                    className="bg-green-200 w-96 "
                    style={{ height: '400px' }}
                  >
                    This is a project
                  </article>
                </div>
              </div>
            );
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
