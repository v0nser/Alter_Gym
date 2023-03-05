import React from 'react'
// import heroimg from "../../assets/images/_DSC8209 2.svg"
// import discount from "../../assets/images/Discount.svg"
import './Hero.css';

function Hero() {
  return (
    <>
    <div className='hero-container'>
        <div className='hero'>
            {/* <img className="img1" src={heroimg} alt="hero" />
            <div className='hardwork'>
              <font>HARD <span className="wrk">WORK,</span> HARD <span className="gain">GAIN.</span></font></div>
            <div className='membership'>
              <font>MEMBERSHIP STARTS AT 1199 INR/MONTH
                </font>
              </div>
            <a className='btn3'>JOIN NOW</a>
            <div className="discount">
                <img className='img2' src={discount} alt="discount"/>
            </div> */}
            <div className="hero">
              <div className="text">
                <h1 className='hard'>HARD <font className="wrk">WORK,</font> HARD <font className="wrk">GAIN.</font></h1>
                <p className='member'>MEMBERSHIP STARTS @ 1199 INR/MONTH</p>
              </div>
              <div className='a1'>
                <a href="/" className='join'>JOIN NOW</a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero