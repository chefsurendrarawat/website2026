import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "fojtkp1x",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

export async function fetchSanity<T>(query: string): Promise<T> {
  return client.fetch<T>(query)
}
