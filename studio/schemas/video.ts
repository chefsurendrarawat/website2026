import { defineField, defineType } from 'sanity'

export const video = defineType({
  name: 'video',
  title: 'Video Publications',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Video Title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'youtubeUrl', title: 'YouTube URL', type: 'url', description: 'Full YouTube video URL (regular, shorts, or embed)', validation: r => r.required() }),
    defineField({ name: 'channel', title: 'Channel Name', type: 'string', description: 'Name of the YouTube channel (optional)' }),
    defineField({ name: 'date', title: 'Date', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
