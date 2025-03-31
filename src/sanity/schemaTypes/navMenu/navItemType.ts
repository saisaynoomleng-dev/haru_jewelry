import { FaLink } from "react-icons/fa";
import { defineField, defineType } from "sanity";

export const navItemType = defineType({
    name: 'navItem',
    icon: FaLink,
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'url',
            type: 'string'
        })
    ]
})