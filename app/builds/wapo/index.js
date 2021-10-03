import React from 'react'
import cartogram from './images/cartogram.png'
import flipped from './images/flipped.png'
import margin from './images/margin.png'
import team from './images/team.jpg'

export const title = 'Washington Post election coverage'
export const description = '2016 was a shitty election. That said, the maps looked great.'
export const card = margin
export const banner = true
export const content = [
  {
    type: 'hero',
    content: cartogram,
    caption: 'Ambitious technical choices and truly shitty political outcomes bought you this sea of red in November of 2016.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>
          In 2015 I worked with the Washington Post to build elections coverage for the US presidential primaries and elections.
          Our team would be developing an API to serve live elections data.
          We were also asked to build the map that would run on this data.
        </p>
        <p>
          Election mapping is a funny, unique thing, that newspapers take very seriously.
          Months of development, testing, and preparation go into an event in which all that preparation may burn down, metaphorically, and perhaps physically if we're talking about servers, on the first traffic spike, that may provide months of advertising revenue, that may make or break the career of the graphics editor, and that lasts a couple of hours at most.
        </p>
        <p>
          This was a dream come true for me.
          Election mapping was a way for my inner news nerd to tangle with my inner map nerd, perhaps in a Face Off-like scenario.
        </p>
        <p>
          An important technical decision around election mapping is how to render the map itself.
          Up until that point, <a href='https://bl.ocks.org/vasturiano/f821fc73f08508a3beeb7014b2e4d50f' target='_blank'>zoom and pan-enabled D3 maps</a> were the method of choice.
          These maps render client-side from static data, which means fewer server-side things to burn down.
          They are performant if you're careful with your boundary simplification, and they worked fine on IE11.
        </p>
        <p>
          Our team took this approach for the primaries.
          Over a long primary season, we crafted a polished but humble tool for elections mapping.
          We could have deployed this same tool for the presidential election, which in technical terms is identical to the primaries (just add more scale), if not for the fact that presidential elections are a major shitting contest between the national publications.
          So like any good engineers, we threw out our tried and tested tool and started from scratch.
        </p>
      </>
    )
  },
  {
    type: 'image',
    content: flipped,
    caption: 'Rendering with static data forces limitations on the maximum level of detail your map supports. With vector tiles, you can increase detail as you zoom, but you deal with trade-offs like slower initialization performance.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>
          For election night, we used vector tiles.
          With vector tiles, our map would be much higher resolution, since we could adjust the level of complexity based on zoom.
          Users could start out with a high-level view, but quickly drill down to whatever interested them.
        </p>
        <p>
          There are draw-backs.
          Compared to SVGs that can be bundled and hydrated, Mapbox GL has a higher initialization cost, what with spinning up the gl context, transferring data to workers, and requesting tiles over the wire.
          Vector tile renderers generally profile for single map use cases.
          On election night, you could have separate maps for Senate and House races running concurrently.
          This compounds the initialization time problem.
          Worst of all, Mapbox GL uses canvas, which isn't supported in IE11.
        </p>
        <p>
          I won't go into detail on how we solved all these problems here, except to mention a very innovative but unknowable black box of a PhantomJS snapshotter that got us our IE11 support.
          Election night 2016 was terrible, except for the maps, which performed beautifully.
          Much of the code we built went on, with improvements from the excellent Washington Post team, to cover the 2018 midterms and 2020 elections.
        </p>
        <p>
          The <a href='https://www.washingtonpost.com/2016-election-results/us-presidential-race/' target='_blank'>map is still online</a>.
          You can read more about this work from <a href='https://www.developmentseed.org/projects/wapo-project' target='_blank'>Development Seed's blog</a>.
        </p>
      </>
    )
  },
  {
    type: 'image',
    content: team,
    caption: 'The team monitoring returns on election night. I\'m the overly patriotic one.'
  }
]
// https://www.developmentseed.org/blog/2016-09-08-preview-the-washington-posts-election-maps
