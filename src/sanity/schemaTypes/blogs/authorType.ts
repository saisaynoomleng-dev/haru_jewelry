import { FaUser } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const authorType = defineType({
    name: 'author',
    icon: FaUser,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Author Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }),
        defineField({
            name: 'bio',
            title: 'Author Bio',
            type: 'text'
        }),
        defineField({
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text'
                })
            ]
        })
    ]
})