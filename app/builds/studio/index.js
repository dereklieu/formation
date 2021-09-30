import React from 'react'
import yosemite from './images/yosemite.png'
import everest from './images/everest.png'
import rainbow from './images/rainbow.gif'

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
        <p>I began working on Studio in 2019, when the team was deep in an effort to compress the learning curve for new users.</p>
        <p>In Studio, the building block is a layer. Layers are familiar if you're coming from ArcGis, but building a map layer by layer is a tedious act of love. A basemap with lots of features, like navigation or outdoor elements, can ship with well over a hundred layers.</p>
        <p>Layers are a low-level abstraction. Low-level abstractions are wrong for most users. I, like most Studio users, work by making modifications to existing templates. I don't need to consider secondary road layers separately from tertiary road layers. I want to control aspects for <i>all</i> the roads in my style.</p>
        <p>So I was excited to help build Components. Components are logical groups of layers. Ours have names like Road Network and Natural Features. A Component interface is tied to style properties on many layers, and Components themselves can be connected, so you could, say, boil down the color choices for an entire base map down to a single color picker.</p>
      </>
    )
  },
  {
    type: 'image',
    content: rainbow
  },
]
