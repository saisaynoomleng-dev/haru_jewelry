import { defineArrayMember, defineField, defineType } from "sanity";
import { ImageIcon } from '@sanity/icons'

export const blockContentType = defineType({
    name: 'blockContent',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal'},
                { title: 'H1', value: 'h1'},
                { title: 'H2', value: 'h2'},
                { title: 'H3', value: 'h3'},
                { title: 'H4', value: 'h4'},
                { title: 'H5', value: 'h5'},
                { title: 'H6', value: 'h6'},
                { title: 'Quote', value: 'blockquote'},
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url'
                            }
                        ]
                    }
                ]
            },
        }),
        defineArrayMember({
            icon: ImageIcon,
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
    ],
})