import { defineField, defineType } from 'sanity'

export const timeline = defineType({
  name: 'timeline',
  title: 'Journey Timeline',
  type: 'document',
  fields: [
    defineField({ name: 'year', title: 'Year / Period', type: 'string', validation: r => r.required() }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'icon', title: 'Icon', type: 'string', options: { list: ['MapPin', 'GraduationCap', 'Briefcase', 'Globe', 'Award', 'Compass'] } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', validation: r => r.required() }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
