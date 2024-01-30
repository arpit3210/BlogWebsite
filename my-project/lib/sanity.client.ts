import {createClient, type QueryOptions, type QueryParams} from 'next-sanity'

import 'server-only'

import {draftMode} from 'next/headers'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const token = process.env.SECRET_SANITY_VIEW_TOKEN;

export const client = createClient({
    projectId,
    dataset, 
    apiVersion, 
    useCdn: false,
    token,
  perspective: 'published',
  studioUrl: '/studio', 
  encodeSourceMap: true, 
});

export async function sanityFetch<QueryResponse>({
    query,
    params = {},
    tags,
  }: {
    query: string
    params?: QueryParams
    tags: string[]
  }) {
    const isDraftMode = draftMode().isEnabled
    if (isDraftMode && !token) {
      throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
    }
  
    const REVALIDATE_SKIP_CACHE = 0
    const REVALIDATE_CACHE_FOREVER = false
  
    return client.fetch<QueryResponse>(query, params, {
      ...(isDraftMode &&
        ({
          token: token,
          perspective: 'previewDrafts',
        } satisfies QueryOptions)),
      next: {
        revalidate: isDraftMode ? REVALIDATE_SKIP_CACHE : REVALIDATE_CACHE_FOREVER,
        tags,
      },
    })
  }