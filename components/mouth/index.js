import React from 'react'

import { Default } from './Default'
import { SoftSmile } from './SoftSmile'
import { Smile } from './Smile'
import { Concerned } from './Concerned'

export const MouthTypes = {
  default: <Default />,
  softSmile: <SoftSmile />,
  smile: <Smile />,
  concerned: <Concerned />,
}

export const Mouth = ({ type }) => {
  return <g id="Mouth">{type ? MouthTypes[type] : MouthTypes['default']}</g>
}
