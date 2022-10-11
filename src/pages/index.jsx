import React from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/sections/HeroSection'
import CryptocurrencySection from '../components/sections/CryptocurrencySection'
Layout
const index = () => {
  return (
    <Layout>
      <HeroSection/>
      <CryptocurrencySection />
    </Layout>
  )
}

export default index