import React from 'react';
import HeroSection from './HeroSection';
import LandingPageSong from './LandingPageSong';
import ExploreTrendingSongs from './ExploreTrendingSongsBtn';
import LandingPageSearchInput from './LandingPageSearchInput';

const LandingPageComponent = () => {
  return (
    <>
      <div style={{width: '1240px', margin: 'auto' }}>
        <HeroSection />
        <LandingPageSearchInput />
        <LandingPageSong />
        <ExploreTrendingSongs />
      </div>  
    </>
  )
}

export default LandingPageComponent;