export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'person_name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'business_name',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'business_name',
      media: 'image',
    },
  },
};
