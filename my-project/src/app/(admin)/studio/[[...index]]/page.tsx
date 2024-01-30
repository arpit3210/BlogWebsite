// ./src/app/studio/[[...index]]/page.tsx
import StudioPageHead from './Studio'

// Ensures the Studio route is statically generated
export const dynamic = 'force-static'

import type {Metadata} from 'next'
import type {Viewport} from 'next'
import {metadata as studioMetadata} from 'next-sanity/studio/metadata'
import {viewport as studioViewport} from 'next-sanity/studio/viewport'




// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
    ...studioMetadata,
    // Overrides the title until the Studio is loaded
    title: 'Loading Studio…',
  }
  
  export const viewport: Viewport = {
    ...studioViewport,
    // Overrides the viewport to resize behavior
    interactiveWidget: 'resizes-content',
  }

export default function StudioPage() {
  return <StudioPageHead />
}