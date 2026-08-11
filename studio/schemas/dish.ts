import { defineField, defineType } from 'sanity'

export const dish = defineType({
  name: 'dish',
  title: 'Signature Dishes',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Dish Name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'prepTime', title: 'Prep Time', type: 'string' }),
    defineField({ name: 'cookTime', title: 'Cook Time', type: 'string' }),
    defineField({ name: 'servings', title: 'Servings', type: 'string' }),
    defineField({ name: 'cuisine', title: 'Cuisine', type: 'string' }),
    defineField({ name: 'course', title: 'Course', type: 'string', options: { list: ['Main Course', 'Appetizer', 'Dessert', 'Side Dish', 'Bread'] } }),
    defineField({ name: 'difficulty', title: 'Difficulty', type: 'string', options: { list: ['Easy', 'Medium', 'Hard'] } }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['Himalayan', 'North Indian', 'Dessert', 'Street Food', 'International'] } }),
    defineField({ name: 'ingredients', title: 'Ingredients', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'steps', title: 'Cooking Steps', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'chefNotes', title: 'Chef Notes', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'chefTip', title: 'Chef Tip', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
  orderings: [{ title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
