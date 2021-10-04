import React from 'react'

import miata from './images/miata.png'
import underneath from './images/underneath.png'
import welding from './images/welding.gif'
import seals from './images/seals.jpg'

export const card = miata
export const title = 'A Miata'
export const description = 'Covid was a fine time to work on a sweet ride.'
export const content = [
  {
    type: 'hero',
    content: underneath,
    caption: 'Me, applying zip ties and thinking about earthquakes, probably.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>
          I live in San Francisco, where Covid caused two things to be true:
        </p>
        <ol className='numbered-list'>
          <li>Lots of people no longer wanted to live here</li>
          <li>Going for brunch in the city was a life vs death proposition</li>
        </ol>
        <p>
          This meant an abundance of street parking.
          So like Americans motivated by $1/gallon gas, I bought a car.
          Except instead of an SUV, I bought a Miata, a tiny, buzzy, two-seater Japanese convertible.
        </p>
        <p>
          This was not my first Miata.
          I had owned one for a few months while living in DC.
          That car, like almost any Miata, was extremely charming, but was also extremely full of mold and rust.
          I sold it some teenagers before moving across the country.
        </p>
        <p>
          This Miata would be different, in that I would care for this Miata, channeling energy that I could not apply towards appearing cool in social gathering.
          It would be great.
          I would buy tools and learn new things from YouTube.
          One day, I would weld an exhaust, maybe.
        </p>
      </>
    )
  },
  {
    type: 'image',
    content: seals
  },
  {
    type: 'image',
    content: welding,
    caption: 'Everything I\'m doing here is wrong/I recommend wearing socks while welding.'
  },
  {
    type: 'prose',
    content: (
      <>
        <p>
          Since buying this Miata, I've done various oil changes, replaced a timing belt and water pump, built and installed <a href='https://www.miataturbo.net/suspension-brakes-drivetrain-49/better-bilstein-ebay-coilover-thread-78451/' target='_blank'>baller Bilstein coilovers</a>, replaced a convertible top, swapped in bigger sway bars, installed frame rails, padded the interior with sound deadening, and cut foam out of car seats with an electric turkey knife.
          Soon I hope to install a roll bar, to prevent being crushed under the weight of my sweet, sweet car.
        </p>
        <p>
          The best thing about learning to work on this car has been the incredible YouTube community.
          I recommend the very informative <a href='https://www.youtube.com/c/TheCarPassionChannel' target='_blank'>Greg Peters</a> as well as the slightly less informative but fun <a href='https://www.youtube.com/playlist?list=PLFl907chpCa4WmBZlSv2FfWTiFAwvUeT6' target='_blank'>Money Pit series from Donut</a>.
        </p>
      </>
    )
  }
]
