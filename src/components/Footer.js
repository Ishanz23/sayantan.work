import React from 'react'

const Footer = () => {
  return (
    <footer className='flex p-4 items-center justify-between font-semibold bg-primary text-gray-100'>
      <p>
        Powered by:
        <a href='https://gatsbyjs.com' target='_' className='font-bold  mx-2 text-blue-400'>
          Gatsby.js
        </a>
      </p>
      <p>
        Creator:{' '}
        <a href='https://github.com/Ishanz23/sayantan.work' target='_' className='font-bold  mx-2 text-blue-400'>
          Sayantan
        </a>
      </p>
    </footer>
  )
}

export default Footer
