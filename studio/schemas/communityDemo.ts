import { defineField, defineType } from 'sanity'

export const communityDemo = defineType({
  name: 'communityDemo',
  title: 'Community Demonstrations',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Event Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'venue', title: 'Venue', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'link', title: 'Event Link', type: 'url' }),
    defineField({ name: 'youtubeLink', title: 'YouTube Link', type: 'url' }),
    defineField({ name: 'logo', title: 'Organization Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
