import { MdOutlineRateReview } from "react-icons/md";
import { defineField, defineType } from "sanity";

export const reviewType = defineType({
    name: 'review',
    icon: MdOutlineRateReview,
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'rating',
            title: 'Rate',
            type: 'number',
            options: {
                list: [
                    { title: '1', value: 1},
                    { title: '2', value: 2},
                    { title: '3', value: 3},
                    { title: '4', value: 4},
                    { title: '5', value: 5},
                ],
                layout: 'radio'
            },
            validation: rule => rule.required().min(1).max(5)
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        })
    ]
})