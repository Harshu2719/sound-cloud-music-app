import React from 'react';
import HeroSection from './Nav/HeroSection';
import BasicCard from './SongsFromAPI/body';
import ExploreTrendingSongs from './ExploreTrendingSongsBtn';
import LandingPageSearchInput from './LandingPageSearchInput';

const LandingPageComponent = () => {
  return (
    <>
      <div style={{width: '1240px', margin: 'auto' }}>
        <HeroSection />
        <LandingPageSearchInput />
        <BasicCard />
        <ExploreTrendingSongs />
      </div>  
    </>
  )
}

export default LandingPageComponent;