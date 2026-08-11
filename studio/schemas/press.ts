import { defineField, defineType } from 'sanity'

export const press = defineType({
  name: 'press',
  title: 'Press & Media',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Article Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'publication', title: 'Publication', type: 'string', validation: r => r.required() }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'link', title: 'Article URL', type: 'url' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
