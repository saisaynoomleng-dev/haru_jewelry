import { defineArrayMember, defineField, defineType } from "sanity";
import { GiDoorRingHandle } from 'react-icons/gi';
import { BiDetail } from 'react-icons/bi';
import { MdPermMedia } from 'react-icons/md'

export const productType = defineType({
    name: 'product',
    icon: GiDoorRingHandle,
    type: 'document',
    groups: [
        { name: 'details', title: 'Details', icon: BiDetail },
        { name: 'media', title: 'Media', icon: MdPermMedia }
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            group: 'details'
        }),
        defineField({
            name: 'slug',
            title: 'slug',
            type: 'slug',
            group: 'details',
            options: {
                source: 'name'
            },
            validation: rule => rule
                .required()
                .info(`Requried to generate a page on the website`),
            hidden: ({document}) => !document?.name
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'category'}]
                })
            ],
            group: 'details',
        }),
        defineField({
            name: 'brand',
            title: 'Brand',
            type: 'reference',
            to: [{type: 'brand'}],
            group: 'details',
        }),
        defineField({
            name: 'price',
            title: 'Product Price',
            type: 'number',
            group: 'details',
        }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
            group: 'details'
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [ {type: 'tag'}]
                })
            ],
            group: 'details'
        }),
        defineField({
            name: 'instock',
            title: 'Products instock',
            type: 'number',
            group: 'details'
        }),
        defineField({
            name: 'color',
            title: 'Available Color',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'color'}]
                })
            ],
            group: 'details'
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'size'}]
                })
            ],
            group: 'details'
        }),
        defineField({
            name: 'warranty',
            title: 'Product Warranty',
            type: 'boolean',
            group: 'details'
        }),
        defineField({
            name: 'reviews',
            title: 'Item Reviews',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'reference',
                    to: [{type: 'review'}]
                })
            ],
            group: 'details'
        }),
        defineField({
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [
                defineArrayMember({
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                })
            ],
            group: 'media'
        }),
        defineField({
            name: 'description',
            title: 'Product Info',
            type: 'blockContent',
            group: 'details'
        })
    ],
    preview: {
        select: {
            name: 'name',
            price: 'price',
            images: 'images',
            instock: 'instock',
            discount: 'discount'
        },
        prepare({name, price, images, instock, discount}){
            const nameFormatted = name || 'Name Unspecified';
            const priceFormatted = parseInt(price);
            const image = images[0];

            return{
                title: `${nameFormatted} `,
                subtitle: `$${priceFormatted}|Instock: ${instock}|${discount}% off`,
                media: image
            }
        }
    }
})