import React from 'react'
import globe from '../../images/illustrations/globe.png'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import { GoChevronDown } from 'react-icons/go';


export default function HeroSection() {
  return (
    <section className='bg-primary bg-opacity-5' >
        <div className='container py-10 grid grid-cols-2 gap-3 items-center'>
          <div className='flex flex-col gap-5'>
            <h4 className='text-primary font-bold text-xl leading-normal'>SIGN UP TODAY</h4>
            <h1 className='text-[68px] font-bold leading-tight '>
              The World’s 
              <span className='block'>Fastest Growing</span>
              Crypto Web App
            </h1>
            <p className='text-gray leading-[30px]'>Buy and sell 200+ cryptocurrencies with 20+ flat currencies using bank transfers or your credit/debit card.</p>
            <div className='flex gap-6'>
              <PrimaryButton>
                Started
              </PrimaryButton>
              <SecondaryButton >
                <span className="flex gap-1 items-center">Download App <GoChevronDown /></span>
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
