import { defineQuery } from "next-sanity";

export const PRODUCTS_QUERY = defineQuery(`*[_type == 'product'
   && defined(slug.current)][0...9]{
    name,
    slug,
    images[]{
      asset->{
        url
      }
    },
    price,
    brand->{
      name
    },
    discount,
    instock,
    reviews[]->{
      rating
    }
   } | order(name) `);

export const PRODUCT_QUERY = defineQuery(`*[_type == 'product'
 && slug.current == $slug][0]{
  name,
  category[]->{
    name
  },
  reviews[]->{
    title,
    rating,
    description},
  price,
  discount,
  warranty,
  tags[]->{
    name
  },
  description,
  instock,
  images[]{
    asset->{
      url
    },
  },
  brand->{
    name
  },
  color[]->{
    name
  },
  size[]->{
    name
  }
 }`);