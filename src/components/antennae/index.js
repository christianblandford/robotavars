import React from 'react'

import { Default } from './Default'
import { Snoo } from './Snoo'
import { RabbitEars } from './RabbitEars'
import { Bender } from './Bender'
import { Shrek } from './Shrek'
import { Satellite } from './Satellite'

export const AntennaeTypes = {
  default: <Default />,
  snoo: <Snoo />,
  rabbitEars: <RabbitEars />,
  bender: <Bender />,
  shrek: <Shrek />,
  satellite: <Satellite />,
}

export const Antennae = ({ type }) => {
  return <g id="Antennae">{type ? AntennaeTypes[type] : AntennaeTypes['default']}</g>
}
