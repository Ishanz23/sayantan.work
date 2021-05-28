import React from 'react'

export default function Skill({ item }) {
  return (
    <div className='item my-4'>
      <div className='name font-bold'>{item.name}</div>
      <div className='level relative bg-secondary w-full h-3 mt-2 rounded-r-md'>
        <div className={`value bg-tertiary ${item.level} h-full absolute top-0 left-0 rounded-r-md`}></div>
      </div>
    </div>
  )
}
