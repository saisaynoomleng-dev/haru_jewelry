import { FaLink } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const navMenuType = defineType({
    name: 'navMenu',
    type: 'document',
    icon: FaLink,
    fields: [
        defineField({
            name: 'name',
            title: 'Navigation Title',
            type: 'string',
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
            name: 'links',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'navLink'}]
                })
            ]
        })
    ]
})