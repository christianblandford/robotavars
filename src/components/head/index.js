import React from 'react'
import { Default } from './Default'
import { LongNeck } from './LongNeck'
import { Sharp } from './Sharp'
import { Round } from './Round'
import { Knight } from './Knight'

export const HeadTypes = {
  default: <Default />,
  longNeck: <LongNeck />,
  sharp: <Sharp />,
  round: <Round />,
  knight: <Knight />,
}

export const Head = ({ type }) => {
  return <g id="Head">{type ? HeadTypes[type] : HeadTypes['default']}</g>
}
