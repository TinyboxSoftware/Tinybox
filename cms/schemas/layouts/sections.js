// this file contains schemas for all the sections

// * Hero Section
export const heroSection = {
  title: 'Hero Section',
  name: 'heroSection',
  type: 'object',
  fields: [
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
    {
      title: 'CTA Buttons',
      name: 'cta_buttons',
      type: 'array',
      of: [
        {
          title: 'CTA Button',
          name: 'cta_button',
          type: 'object',
          fields: [
            { title: 'Content', name: 'content', type: 'string' },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    prepare(selection) {
      return {
        title: 'Hero Section',
      };
    },
  },
};

// * Testimonials Section

// * About Me Section
export const aboutSection = {
  title: 'About Us Section',
  name: 'aboutSection',
  type: 'object',
  fields: [
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Self Portrait',
      name: 'portrait',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'alt_text',
          type: 'string',
          title: 'Alternate Text',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'CTA Buttons',
      name: 'cta_buttons',
      type: 'array',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .max(2)
          .error(`You shouldn't have more than two CTA buttons`),
      of: [
        {
          title: 'CTA Button',
          name: 'cta_button',
          type: 'object',
          fields: [
            { title: 'Content', name: 'content', type: 'string' },
            {
              title: 'URL',
              name: 'href',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'subtitle',
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
// * Contact Me Section

// * Showcase Section
