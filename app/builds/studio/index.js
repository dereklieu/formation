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
    caption: 'Studio is a platform for making maps, and also a visual entry point into Mapbox APIs. In addition to the Style Editor shown here, Studio supports tools for creating and managing the underlying data that your map runs on.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>I began working on Studio in 2019, when the team was deep in an effort to compress the learning curve for new users.</p>
        <p>In a Mapbox map, the building block is a layer. Layers are familiar if you're coming from ArcGis, but building a map layer by layer is a tedious act of love. A basemap with lots of features, like navigation or outdoor elements, can ship with well over a hundred layers.</p>
        <p>Layers are also a low-level abstraction, and low-level abstractions are wrong for most users. In Studio, I work by making modifications to existing templates, so I don't need to consider secondary road layers separately from tertiary road layers. I want to control aspects for <i>all</i> the roads in my style.</p>
        <p>So I was excited to help build Components. Components are logical groups of layers. They have names like Road Network and Natural Features. A Component's interface controls style properties on many layers, and Components themselves can be connected. You could, say, boil down the color choices for an entire base map down to a single color picker.</p>
      </>
    )
  },
  {
    type: 'image',
    content: rainbow,
    caption: 'Opinions about things like label contrast are built into Components. In this Monochrome style, you can choose any base color and maintain pretty good contrast for your country labels.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>I ended up spending a lot of time at Mapbox building out the ecosystem around Components: sketching out and implementing an S3-based deployment system to support our alpha launch (we still use it), building a special class of Components for data visualization (who doesn't like data viz?), and improving compiler performance (yes, there is a compiler). I now work on the APIs that serve style documents, but I collaborate with the Studio team closely.</p>
        <p>Components are a hoot, by the way. If you haven't used Studio yet, it's free with a free account at <a href='https://studio.mapbox.com/' target='_blank' title='give Studio a try'>studio.mapbox.com</a>.</p>
      </>
    )
  }
]
