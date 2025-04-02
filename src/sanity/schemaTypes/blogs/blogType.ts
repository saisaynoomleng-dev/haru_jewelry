import { BiFile } from "react-icons/bi";
import { defineField, defineType } from "sanity";

export const blogType = defineType({
    name: 'blog',
    icon: BiFile,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Blog Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: rule => rule
                .required()
                .info(`Required to generate a page on the website`)
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{type: 'author'}]
        }),
        defineField({
            name: 'duration',
            title: 'Reading Duration',
            type: 'number',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string'
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                })
            ]
        })
    ]
})