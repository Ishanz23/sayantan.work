import React from 'react'

export default function Certification({ item }) {
  return (
    <div className='each mb-8'>
      <div className='company text-lg font-bold text-gray-600'>
        {item.title}, {item.institution}
      </div>
      <div className='duration text-gray-500 my-2 text-sm font-semibold tracking-wider'>
        <span className='uppercase'>{item.completion}</span>
      </div>
      <div className='details my-4 text-sm'>
        <span className='text-semibold'>Link:</span>{' '}
        <a href={item.link} target='_'>
          {item.link}
        </a>
      </div>
    </div>
  )
}
