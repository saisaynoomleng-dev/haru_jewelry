import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { brandType } from './brandType'
import { tagType } from './tagType'
import { colorType } from './colorType'
import { sizeType } from './sizeType'
import { reviewType } from './reviewType'
import { blockContentType } from './blockContent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    brandType,
    tagType,
    colorType,
    sizeType,
    reviewType,
    blockContentType
  ],
}
