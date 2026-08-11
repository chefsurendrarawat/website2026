import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Main Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Hero Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Button Link', type: 'string' }),
  ],
})
