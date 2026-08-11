import { defineField, defineType } from 'sanity'

export const award = defineType({
  name: 'award',
  title: 'Awards & Certifications',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Award Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'organization', title: 'Organization', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Certificate Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
