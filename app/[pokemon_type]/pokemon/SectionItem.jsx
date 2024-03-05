import React from 'react'

export default function SectionItem({ name, value}) {
  return (
    <div className="p-4 border-t-2 max-w-1/2 flex-[0_0_50%]">
    <p className="mb-1 text-blue-400">{name}</p>
    <p>
      {value}
    </p>
  </div>
  )
}
