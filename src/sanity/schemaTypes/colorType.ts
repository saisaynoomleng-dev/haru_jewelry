import { defineField, defineType } from "sanity";
import { IoIosColorFilter } from 'react-icons/io'

export const colorType = defineType({
    name: 'color',
    icon: IoIosColorFilter,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Color Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        })
    ]
})