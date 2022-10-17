import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import logo from '../../images/logo.svg';
import PrimaryButton from '../buttons/PrimaryButton';

export default function Footer() {
  return (
    <footer>
      <div className="container px-2 border-y border-lightgray">
        <div className="flex flex-wrap justify-between">
          <div className="w-2/12 xl:w-[14%]  py-4 lg:py-6 order-2">
            <div className='mb-6'>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className='w-full xl:w-7/12 border-lightgray xl:border-l border-b xl:border-b-0  xl:border-r order-1 xl:order-2 '>
            <div className='grid grid-cols-3 bg-lightgray gap-[1px]'>
              <ul className="p-6 xl:pl-12 bg-white">
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Buy Crypto</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Exchanges</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Watchlist</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Portfolio</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>NFT</a>
                </li>
              </ul>
              <ul className="p-6  xl:pl-12 bg-white">
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Products</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>About Us</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Careers</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Blog</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Security</a>
                </li>
              </ul>
              <ul className="p-6  xl:pl-12 bg-white">
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Help Center</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Contact Us</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>System Status</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Area Avaibility</a>
                </li>
                <li className='mb-4'>
                  <a href="/" className='text-gray hover:text-primary'>Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="xl:w-3/12 p-4 lg:p-6 order-2">
            <span className='text-gray'>Newsletter</span>
            <p className='text-gray font-thin'>Never miss anything crypto when you're on the go</p>
            <div className="flex gap-4 my-4">
              <div>
                <input type="email" className="border border-lightgray rounded-xl p-4 outline-none focus:border-primary w-full" placeholder="Enter your email" />
              </div>
              <div>
                <PrimaryButton className="!px-5   aspect-square !rounded-md">
                  <BsArrowRight color='white' className="group-hover:animate-moveright" />
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6">
        <p className="text-gray">© Copyright 2022 NEFA LLC. All rights reserved</p>
      </div>
    </footer>
  );
}