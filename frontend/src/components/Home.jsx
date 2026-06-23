import React from 'react'
import Navbar from './shared/Navbar'
import CategoryCarousel from './CategoryCarousel'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import UseGetAllJobs from '../hooks/UseGetAllJobs'
const Home = () => {
  UseGetAllJobs();
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
