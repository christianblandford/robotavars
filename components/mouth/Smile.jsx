import React from 'react'

export const Smile = () => {
  return (
    <g id="Smile" transform="translate(116, 162)">
      <defs>
        <style>
          {'.SmileLips{stroke:#414042;stroke-miterlimit:10;stroke-width:3px;fill:none}'}
        </style>
      </defs>

      <path
        d="M61.08 1.5a4.45 4.45 0 014 6.3C61 16.7 48.39 26.5 33.5 26.5S6 16.7 1.91 7.8a4.45 4.45 0 014-6.3z"
        stroke="#414042"
        strokeMiterlimit={10}
        strokeWidth={3}
        fill="#fff"
      />
      <path
        className="SmileLips"
        d="M30.5 2.75v23.5M36.5 2.75v23.5M42.5 2.75v22.5M48.5 2.75v20.5M54.5 2.75v17.5M60.5 2.75v11.5M24.5 2.75v22.5M18.5 2.75v20.5M12.5 1.25v18M6.5 2.25v12.5"
      />
    </g>
  )
}
