import React from 'react'
import yosemite from './images/yosemite.png'
import everest from './images/everest.png'

export const title = 'Mapbox Studio'
export const description = 'A publishing platform for maps and geographic data. I started working on Studion in 2019.'
export const card = yosemite
export const banner = true
export const content = [
  {
    type: 'hero',
    content: everest,
    caption: 'Studio is the interface and on-ramp for Mapbox APIs. If you\'re familiar with Studio, then you might already be thinking of the Style Editor, a photoshop for maps that runs in your browser. Studio also supports tools for creating and managing the underlying data that your map runs on.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>I began working on Studio in May of 2019.</p>
      </>
    )
  },
]
