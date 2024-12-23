import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <div className='mb-20'>
      <Banner />
      </div>
      <div>
      <Hero />
      <LatestCollection />
      </div>
      <BestSeller />
      <OutPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
