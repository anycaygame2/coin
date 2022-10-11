import React from 'react'

export default function PrimaryButton({children, onClick, ...props}) {
  return (
    <button onClick={onClick} className='bg-primary text-white rounded-full px-10 py-3' {...props} >
      {children}
    </button>
  )
}
