import React from 'react'
import Navbar from './shared/Navbar'
import CategoryCarousel from './CategoryCarousel'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
       <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  )
}

export default Home
