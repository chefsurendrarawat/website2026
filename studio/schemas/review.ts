import { defineField, defineType } from 'sanity'

export const review = defineType({
  name: 'review',
  title: 'Restaurant Reviews',
  type: 'document',
  fields: [
    defineField({ name: 'text', title: 'Review Text', type: 'text', rows: 3, validation: r => r.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string', validation: r => r.required() }),
    defineField({ name: 'rating', title: 'Rating (1-5)', type: 'number', validation: r => r.min(1).max(5).required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
