// schemas/category.js

export const category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Category Name',
        type: 'string',
        description: 'Name of the category (e.g., Chairs, Sofas)',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Slug generated from category name',
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
    ],
  };
  