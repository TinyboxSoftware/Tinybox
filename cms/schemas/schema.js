// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import category from './blog/category';
import post from './blog/post';
import author from './blog/author';
import homepage from './singletons/homepage';
// import generic content
import blockContent from './blog/blockContent';
import testimonial from './testimonial';
import { heroSection, aboutSection } from './layouts/sections';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    post,
    author,
    category,
    blockContent,
    testimonial,
    homepage,
    heroSection,
    aboutSection,
  ]),
});
