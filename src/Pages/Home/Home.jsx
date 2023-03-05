import React from 'react'
import './Home.css';
import Hero from '../../Components/Hero/Hero';
import G20 from '../../Components/Group20/G20';
import Third from '../../Components/Third/Third';
import Mmbrshp from '../../Components/Mmbrshp/Mmbrshp'
export default function Home() {
  return (
    <>
    <div>
      <Hero/>
      <G20/>
      <Third/>
      <Mmbrshp/>
    </div>
    </>
  )
}
