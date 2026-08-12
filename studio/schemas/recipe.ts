import { defineField, defineType } from 'sanity'

export const recipe = defineType({
  name: 'recipe',
  title: 'Recipes',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Recipe Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: r => r.required() }),
    defineField({ name: 'description', title: 'Short Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Main Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'prepTime', title: 'Prep Time', type: 'string' }),
    defineField({ name: 'cookTime', title: 'Cook Time', type: 'string' }),
    defineField({ name: 'servings', title: 'Servings', type: 'string' }),
    defineField({ name: 'difficulty', title: 'Difficulty', type: 'string', options: { list: ['easy', 'medium', 'advanced'] } }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Himalayan', 'North Indian', 'International', 'Desserts'] } }),
    defineField({ name: 'cuisine', title: 'Cuisine', type: 'string' }),
    defineField({ name: 'course', title: 'Course', type: 'string' }),
    defineField({ name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'chefNotes', title: 'Chef Notes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'chefTip', title: 'Chef Tip', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', media: 'image', subtitle: 'category' } },
})
