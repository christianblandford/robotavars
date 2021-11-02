import React from 'react'

export const RabbitEars = () => {
  return (
    <g transform="translate(85,8)">
      <defs>
        <style>
          {
            '.rabbitEars1,.rabbitEars2,.rabbitEars3{fill:none;stroke:#414042;stroke-miterlimit:10}.rabbitEars1{stroke-width:5px}.rabbitEars2{stroke-width:3px}.rabbitEars4{fill:#414042}'
          }
        </style>
      </defs>
      <path className="rabbitEars1" d="M29 68l-9-23" />
      <path className="rabbitEars2" d="M19.5 44.5l-10-24" />
      <path className="rabbitEars3" d="M9.5 20.5l-8-19" />
      <circle className="rabbitEars4" cx={1.5} cy={1.5} r={1.5} />
      <g>
        <path className="rabbitEars1" d="M100 68l9-23" />
        <path className="rabbitEars2" d="M109.5 44.5l10-24" />
        <path className="rabbitEars3" d="M119.5 20.5l8-19" />
        <circle className="rabbitEars4" cx={127.5} cy={1.5} r={1.5} />
      </g>
    </g>
  )
}
