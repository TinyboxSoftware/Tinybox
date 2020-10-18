import * as sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
const builderFunc = (source) => builder.image(source);

export const buildImage = builderFunc;
