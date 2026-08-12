import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'chefName', title: 'Chef Name', type: 'string' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'restaurantName', title: 'Restaurant Name', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
    defineField({ name: 'googleMapsUrl', title: 'Google Maps URL', type: 'url' }),
    defineField({ name: 'instagram', title: 'Instagram URL', type: 'url' }),
    defineField({ name: 'youtube', title: 'YouTube URL', type: 'url' }),
    defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url' }),
    defineField({ name: 'facebook', title: 'Facebook URL', type: 'url' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp Channel URL', type: 'url' }),
    defineField({ name: 'medium', title: 'Medium URL', type: 'url' }),
  ],
})
