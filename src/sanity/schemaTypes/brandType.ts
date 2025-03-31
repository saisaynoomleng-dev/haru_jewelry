import { defineField, defineType } from "sanity";
import { TbCircleLetterBFilled } from 'react-icons/tb' 

export const brandType = defineType({
    name: 'brand',
    type: 'document',
    icon: TbCircleLetterBFilled,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            title: 'Brand Name'
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