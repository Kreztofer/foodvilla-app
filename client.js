import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'k5wtp1zd',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
  token:
    'skYYA4FPbEMgcc8Pg2VyicMUmhK9CGHYswY5TlMRBT6dp07zhrty3mJHeRstcHTezJdEo7CD9ybmf2fAu5i7WvWP7ZHAMrd65bOmxQVy69gXBeVaIcdaM3nxADLeEGrwTuPe7q4dHAVghI6t9JkqWzQUmETEkbpapDWu7qEeoFgKsLucCsxY',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
