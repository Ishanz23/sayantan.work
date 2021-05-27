import React from 'react'

export default function Employment({ item }) {
  return (
    <div className='each mb-8'>
      <div className='company text-lg font-bold text-gray-700'>
        {item.title}, {item.employer}, {item.city}
      </div>
      <div className='duration text-gray-500 my-2 uppercase text-sm font-semibold tracking-wider'>
        {item.start} - {item.end}
      </div>
      <div className='details my-4 text-sm'>
        <ul className='list-disc pl-12'>
          {item.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
