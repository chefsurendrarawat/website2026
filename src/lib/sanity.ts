import { createClient } from "@sanity/client"
import { createImageUrlBuilder } from "@sanity/image-url"

export const client = createClient({
  projectId: "fojtkp1x",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
})

const builder = createImageUrlBuilder(client)
export function urlFor(source: any) {
  return builder.image(source)
}

export async function fetchSanity<T>(query: string, params?: Record<string, any>): Promise<T> {
  return client.fetch<T>(query, params)
}
