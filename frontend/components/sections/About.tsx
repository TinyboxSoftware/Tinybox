import BlockContent from '@sanity/block-content-to-react';
import { buildImage } from '@utils/sanity';

const About = ({ data }) => {
  console.log(data);

  return (
    <section className="grid items-center grid-cols-2 py-8 justify-items-center">
      <div>
        <img
          className="transform rotate-2"
          src={buildImage(data.portrait).width(448).format('webp')}
          alt={data.portrait.alt_text}
        />
      </div>
      <div className="prose lg:prose-lg">
        <BlockContent blocks={data.content} />
      </div>
    </section>
  );
};

export default About;
