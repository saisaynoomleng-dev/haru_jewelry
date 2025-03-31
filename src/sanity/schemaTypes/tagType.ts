import { defineField, defineType } from "sanity";
import { CiHashtag } from 'react-icons/ci'

export const tagType = defineType({
    name: 'tag',
    icon: CiHashtag,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Tag Name',
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