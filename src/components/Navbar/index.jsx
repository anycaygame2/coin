import React from 'react'
import logo from '../../images/logo.svg'
import PrimaryButton from '../buttons/PrimaryButton'
import SecondaryButton from '../buttons/SecondaryButton'
import { GoChevronDown } from 'react-icons/go';



export default function index() {
  return (
    <nav className='bg-primary bg-opacity-5'>
      <div className='container sticky top-0 py-8 flex justify-between items-center'>
      <div className=' flex justify-start gap-10 items-center'>
        <div className='flex'>
          <img src={logo} alt="Logo Coin" />
        </div>
        <div>
          <ul className='flex gap-6 items-center'>
            <li><a href="#" className='hover:text-primary'>Crytocurrency</a></li>
            <li><a href="#" className='hover:text-primary'>Exchanges</a></li>
            <li><a href="#" className='hover:text-primary'>Watchlist</a></li>
            <li><a href="#" className='hover:text-primary'>NFT</a></li>
            <li><a href="#" className='hover:text-primary'>Portfolio</a></li>
            <li><a href="#" className='hover:text-primary'><span className='flex items-center gap-1'>Products <GoChevronDown /></span></a></li>
          </ul>
        </div>
      </div>
      <div className='flex gap-6'>
        <SecondaryButton>
        Log In
        </SecondaryButton>
        <PrimaryButton>
        Sign Up
        </PrimaryButton>
      </div>
    </div>
    </nav>
  )
}