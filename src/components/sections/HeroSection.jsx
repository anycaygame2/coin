import React from 'react'
import globe from '../../images/illustrations/globe.png'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
export default function HeroSection() {
  return (
    <section>
        <div className='grid grid-cols-2 gap-3 items-center'>
          <div className='flex flex-col gap-5'>
            <h4 className='text-primary font-bold'>SIGN UP TODAY</h4>
            <h1 className='text-5xl font-bold leading-normal '>
              The World’s 
              <span className='block'>Fastest Growing</span>
              Crypto Web App
            </h1>
            <p className='text-gray'>Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</p>
            <div className='flex gap-6'>
              <PrimaryButton>
                Started
              </PrimaryButton>
              <SecondaryButton>
                Download App
              </SecondaryButton>
            </div>
          </div>
          <div>
            <img src={globe} alt="image globe" />
          </div>
        </div>
      </section>
  )
}
