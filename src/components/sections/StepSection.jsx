import React from 'react';

import signupImage from '../../images/illustrations/signup.png';
import walletImage from '../../images/illustrations/wallet.png';
import okayImage from '../../images/illustrations/okay.png';
import arrow from '../../images/arrow.svg';
import arrowpng from '../../images/arrow.png';
import { Fade } from 'react-reveal';

export default function StepSection() {
  return (

    <section className="px-4">
      <div className='rounded-3xl bg-gradient-to-b from-[#FFFFFF] to-[#F4F9FF] py-20'>
        <div className="container px-4 xl:px-16 mx-auto text-center">
          <h2 className="font-bold text-4xl mb-6 leading-normal">
            Get started in just a few minutes
          </h2>
          <div className="md:flex justify-center">
            <Fade up>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={signupImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300 z-10" alt="step 1" />
                  <img src={arrow} alt="" className="hidden xl:block absolute top-1/2 -right-1/2 -translate-x-[26%] z-0" />
                  <img src={arrowpng} alt="" className="hidden md:block xl:hidden  absolute top-1/2 right-0 translate-x-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
                <p className="text-gray ">
                  Buy Bitcoin or Ethereum, then securely store it in your Wallet or send it on easily to friends
                </p>
                <p className="md:hidden text-center py-6" ><img src={arrowpng} className="rotate-90 inline" alt="arrow" /></p>
              </div>
            </Fade>
            <Fade up delay={500}>
              <div className="text-center relative px-4">
                <div className='relative'>
                  <img src={walletImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300 z-10" alt="step 2" />
                  <img src={arrow} alt="" className="hidden xl:block absolute top-1/2 -right-1/2 -translate-x-[40%] z-0" />
                  <img src={arrowpng} alt="" className="hidden md:block xl:hidden  absolute top-1/2 right-0 translate-x-full" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Fund</h3>
                <p className="text-gray ">
                  Choose your preferred payment method such as bank transfer or credit card to top up your NEFA Wallet
                </p>
                <p className="md:hidden text-center py-6" ><img src={arrowpng} className="rotate-90 inline" alt="arrow" /></p>
              </div>
            </Fade>
            <Fade up delay={1000}>
              <div className="text-center relative px-4">

                <img src={okayImage} className="mb-4 mx-auto hover:-translate-y-6 hover:scale-105 transition-all duration-300 z-10" alt="step 3" />
                <h3 className="text-2xl font-bold mb-4">Buy Crypto</h3>
                <p className="text-gray ">
                  Sign up for your free NEFA Wallet on web, iOS or Android and follow our easy process to set up your profile
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}