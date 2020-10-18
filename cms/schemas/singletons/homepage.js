export default {
  name: 'homepage',
  title: 'Home Page',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'text',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      description:
        'a main image for the site, this is what people will see on social media',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Sections',
      description: 'Each one of these will represent a "section" on the page',
      name: 'sections',
      type: 'array',
      of: [{ type: 'heroSection' }, { type: 'aboutSection' }],
    },
  ],

  preview: {
    select: {},
    prepare(selection) {
      return {
        title: 'Home Page',
        subtitle: 'this is what users see first!',
      };
    },
  },
};
