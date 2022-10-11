import React from 'react'

export default function PrimaryButton({children, onClick, ...props}) {
  return (
    <button onClick={onClick} className='border border-primary text-primary transition-colors duration-300 hover:bg-primary hover:text-white rounded-full px-10 py-3' {...props} >
      {children}
    </button>
  )
}
