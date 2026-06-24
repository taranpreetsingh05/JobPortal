import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import CategoryCarousel from './CategoryCarousel'
import HeroSection from './HeroSection'
import LatestJobs from './LatestJobs'
import Footer from './Footer'
import UseGetAllJobs from '../hooks/UseGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const {user}=useSelector(store=>store.auth);
  UseGetAllJobs();
  const navigate=useNavigate();
  useEffect(()=>{
    if(user?.role=='recruiter'){
      navigate("/admin/companies");
    }
  },[]);
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
