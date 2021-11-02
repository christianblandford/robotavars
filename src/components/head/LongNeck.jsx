import React from 'react'
import { HeadShadow } from './headShadow'

export const LongNeck = () => {
  return (
    <g transform="translate(84, 68)">
      <defs>
        <style>
          {'.longNeckHead{fill:#a2a1a1;stroke:#414042;stroke-miterlimit:10;stroke-width:2px}'}
        </style>
      </defs>
      <HeadShadow x={40} y={135} />
      <path
        className="longNeckHead"
        d="M131 54.47C131 29.91 102.45 1 66.56 1S1 29.91 1 54.47v70.19C1 130.92 30.42 136 36.56 136h58.88c6.14 0 35.56-5.08 35.56-11.34z"
      />
    </g>
  )
}
