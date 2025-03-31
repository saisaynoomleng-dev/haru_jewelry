import { BiSolidCategoryAlt } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
    name: 'category',
    type: 'document',
    icon: BiSolidCategoryAlt,
    fields: [
        defineField({
            name: 'name',
            title: 'Category Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            },
            validation: rule => rule.required()
        })
    ]
})