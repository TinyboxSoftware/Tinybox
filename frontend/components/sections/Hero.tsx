import { createElement, FunctionComponent } from 'react';
import BlockContent from '@sanity/block-content-to-react';

type HeroProps = {
  data: {
    content: Array<any>;
    cta_buttons: Array<any>;
    _key: string;
    _type: string;
  };
};

const Hero: FunctionComponent<HeroProps> = ({ data }) => {
  return (
    <section className="my-8 lg:my-12">
      <div className="prose prose-indigo lg:prose-lg">
        <BlockContent blocks={data.content}></BlockContent>
      </div>
      <div className="flex flex-row">
        {data.cta_buttons.map((button) => {
          return (
            <a
              href={button.href}
              className="px-6 py-4 font-bold tracking-wider uppercase transition-all rounded text-tinyblue-100 bg-tinyblue-500 hover:bg-tinyblue-400 hover:text-white"
            >
              {button.content}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
