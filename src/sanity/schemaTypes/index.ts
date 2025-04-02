import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { brandType } from './brandType'
import { tagType } from './tagType'
import { colorType } from './colorType'
import { sizeType } from './sizeType'
import { reviewType } from './reviewType'
import { blockContentType } from './blockContent'
import { navMenuType } from './navMenu/navMenuType'
import { navLinkType } from './navMenu/navLinkType'
import { navItemType } from './navMenu/navItemType'
import { blogType } from './blogs/blogType'
import { authorType } from './blogs/authorType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    brandType,
    tagType,
    colorType,
    sizeType,
    reviewType,
    blockContentType,
    navMenuType,
    navLinkType,
    navItemType,
    blogType,
    authorType
  ],
}
