import React from 'react'
import emoji from 'react-easy-emoji'
import { BsChevronRight } from 'react-icons/bs'

export default function CryptocurrencySection() {
  return (
    <section className='-mt-10'>
      <div className='container mx-auto rounded-3xl bg-white py-8  px-4 shadow'>
        <div className='grid grid-cols-3 gap-3'>
          <div>
            <div className='flex justify-between mb-6'>
              <h2 className='flex  items-center text-lg gap-2 font-bold'>{ emoji('🔥 Trending') }</h2> 
              <a href="#" className='flex gap-1  text-primary justify-center items-center'>More <BsChevronRight /></a>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div className='flex justify-between mb-6'>
                <h2 className='flex  items-center text-lg gap-2 font-bold'>{ emoji('🚀  Top Gainers') }</h2> 
                <a href="#" className='flex gap-1  text-primary justify-center items-center'>More <BsChevronRight /></a>
            </div>
          </div>
          <div>
          <div className='flex justify-between mb-6'>
                <h2 className='flex  items-center text-lg gap-2 font-bold'>{ emoji('💎  Recently Added') }</h2> 
                <a href="#" className='flex gap-1  text-primary justify-center items-center'>More <BsChevronRight /></a>
            </div>
          </div>
        </div>
      </div> 
    </section>
  )
}
