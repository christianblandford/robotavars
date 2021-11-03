import React from 'react'

export const Shrek = () => {
  return (
    <>
      <defs>
        <style>
          {
            '.antennaStem,.antennaBall{fill:#808285;stroke-width:2px;stroke:#414042;stroke-miterlimit:10}.antennaBall{fill:#bcbec0;stroke-width:3px}'
          }
        </style>
      </defs>
      <g id="ShrekAntenna" transform="translate(80, 44)">
        <path className="antennaStem" d="M36.66 35.58L14.13 5l-7.47 6.67L28.36 41" />
        <circle className="antennaBall" cx={15.5} cy={15.5} r={14} />
        <g>
          <path className="antennaStem" d="M108.34 37.58L130.88 7l7.46 6.67L116.64 43" />
          <circle className="antennaBall" cx={129.5} cy={17.5} r={14} />
        </g>
      </g>
    </>
  )
}
