import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    useCdn: true,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}

// Queries
export const CAKES_QUERY = `*[_type == "cake" && available == true] | order(order asc, _createdAt desc) {
  _id,
  name,
  slug,
  description,
  price,
  image,
  category,
  weight,
  servings,
  featured
}`

export const CAKE_BY_SLUG_QUERY = `*[_type == "cake" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  price,
  image,
  gallery,
  category,
  weight,
  servings,
  ingredients,
  allergens,
  available
}`

export const FILLINGS_QUERY = `*[_type == "filling" && available == true] | order(order asc, name asc) {
  _id,
  name,
  slug,
  description,
  price,
  image,
  category
}`

export const FEATURED_CAKES_QUERY = `*[_type == "cake" && featured == true && available == true] | order(order asc) [0...6] {
  _id,
  name,
  slug,
  description,
  price,
  image,
  category
}` 