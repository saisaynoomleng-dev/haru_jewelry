import { defineField, defineType } from "sanity";
import { SlSizeFullscreen } from 'react-icons/sl'

export const sizeType = defineType({
    name: 'size',
    icon: SlSizeFullscreen,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }),
    ]
})