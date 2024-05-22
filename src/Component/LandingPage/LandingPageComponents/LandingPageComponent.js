import React from 'react';
import LandingPageSong from '../LandingPageSong/LandingPageSong';
import LandingPageSearchInput from '../LandingPageSearchInput/LandingPageSearchInput';
import HeroSection from '../HeroSection/HeroSection';
import ExploreTrendingSongsBtn from '../ExploreTrendingSongButton/ExploreTrendingSongsBtn';
import './LandingPageComponent.css';
import AddvertiesmentComponent from '../AdvertiesmentComponent/AddvertiesmentComponent';
import Footer from '../Footer/Footer';

const LandingPageComponent = () => {
  return (
    <>
      <div className='landingPage'>
        <HeroSection />
        <LandingPageSearchInput />
        <LandingPageSong />
        <ExploreTrendingSongsBtn />
        <AddvertiesmentComponent />
        <Footer />
      </div>  
    </>
  )
}

export default LandingPageComponent;