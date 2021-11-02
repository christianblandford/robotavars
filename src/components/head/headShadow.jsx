import React from 'react'

export const HeadShadow = ({ x, y }) => {
  return (
    <g>
      <defs>
        <style>{'.headShadowClass{opacity:0.30;}'}</style>
      </defs>
      <rect x={x} y={y} className="headShadowClass" width={54} height={5} />
    </g>
  )
}
