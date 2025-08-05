import Header from '@/components/Header/Header'
import About from '@/pages/About/About'
import Contact from '@/pages/Contact/Contact'
import Footer from '@/pages/Footer/Footer'
import Hero from '@/pages/Hero/Hero'
import Listings from '@/pages/Listings/Listings'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Header />
      <Listings />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home