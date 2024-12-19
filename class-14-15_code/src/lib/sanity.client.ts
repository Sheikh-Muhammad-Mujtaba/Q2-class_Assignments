import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { projectId, apiVersion, dataset } from '../sanity/env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

