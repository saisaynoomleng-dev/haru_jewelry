import { FaLink } from "react-icons/fa";
import { defineArrayMember, defineField, defineType } from "sanity";

export const navLinkType = defineType({
    name: 'navLink',
    type: 'document',
    icon: FaLink,
    fields: [
        defineField({
            name: 'name',
            title: 'Link Name',
            type: 'string'
        }),
        defineField({
            name: 'url',
            type: 'string'
        }),
        defineField({
            name: 'branch',
            title: 'Link Branch',
            type: 'array',
            of: [
              defineArrayMember({
                type: 'reference',
                to: [{type: 'navItem'}]
              })
            ]
        })
    ]
})