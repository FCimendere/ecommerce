import sanityClient from '@sanity/client';
//generate image urls from Sanity image records.
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-08-06', 
  token: process.env.SANITY_SECRET_TOKEN 
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);