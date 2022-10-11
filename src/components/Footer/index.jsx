import React from 'react'
import logo from '../../images/logo.svg'
import PrimaryButton from '../buttons/PrimaryButton'
import {AiOutlineArrowRight} from 'react-icons/ai'

export default function index() {
  return (
    <footer className='container  text-left text-gray'>
      <div className='border-t border-lightgray grid grid-cols-4  items-stretch'>
        <div className=' px-5 py-[70px] pr-[70px] flex flex-nowrap justify-start space-between ' >
          <div className='w-[130px]'><img src={logo} alt="logo cion" /></div>
          <ul className='flex flex-col gap-4'>
            <li>Buy Crypto</li>
            <li>Exchanges</li>
            <li>Watchlist</li>
            <li>Portfolio</li>
            <li>NFT</li>
          </ul>
        </div>
        <div className='py-[70px] border-l border-lightgray'>
          <ul className='flex flex-col gap-4'>
            <li>Products</li>
            <li>Abous Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Security</li>
          </ul>
        </div>
        <div className='py-[70px] border-r border-l border-lightgray'>
          <ul className='flex flex-col gap-4'>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>System Status</li>
            <li>Area of Avaibility</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='p-[70px] pr-5 flex flex-col gap-4'>
          <p><strong>Newsletter</strong></p>
          <p>Never miss anything crypto when you're on the go</p>

          <div className='flex'><input type="text" />
          <PrimaryButton className="p-4">
                <AiOutlineArrowRight /> 
          </PrimaryButton>
          </div>
        </div>
      </div>
      <p className='border-t border-lightgray py-6'>© Copyright 2022 NEFA LLC. All rights reserved</p>
    </footer>
  )
}
