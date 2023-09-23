import React from 'react';
import Trending from './trending/Trending';
import HeroBanner from './heroBanner/HeroBanner'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated';
const Home = () => {
  return (
    <div className="homePage" >
      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home
