import React, { useState } from 'react'
import FooImg from '../../Components/AbvFooImg/FooImg';
import './Service.css'

function Service() {
  const [hidden, setHidden] = useState(true);
  return (
    <>
    <div>
      <div className="h21">
        Flexible Membership Options
      </div>
      <div>
        <p className='h22'>We Know Decision-Making is Hard. But Don't Sweat it. Choose The Membership That's Right For</p>
        <p className='h22c'>You And Start Perspiring To Greatness.</p>
      </div>
      <div className="cardss">
      <div className="row">
     <div className="column">
      <div className="card">
      <h5>Peak Results</h5>
      <p className='price'>$29.99</p>
      <p className="desc">monthly recurring payment</p>
      <hr></hr>
      <p className="desc2">access to all clubs</p>
      <a className='srvcbtn' onClick={() => setHidden(s=>!s)}>SELECT</a>
      {!hidden ? <section className='sec1'>
        <div className="card2">
            <p className='inc'>INCLUDES</p>
            <ul className='fascility'>
              <li>Cardio, Weights & Machines</li>
              <li>Locker Rooms with Showers</li>
              <li>Free Wi-Fi</li>
              <li>CrunchONE Kickoff</li>
              <li>Power Half Hour Circuit Training</li>
              <li>Group Fitness Classes</li>
              <li>Crunch Live Online Workouts</li>
              <li>Free T-shirt</li>
              <li>Ride Classes</li>
              <li>HydroMassage</li>
              <li>Tanning</li>
              <li>Guest Priviliges</li>
              <li>Advanced HIIT Classes</li>
            </ul>
            <p className='avail'>AVAILABLE ADD-ONS</p>
            <ul className='fascility'>
              <li>Personal Training</li>
            </ul>
        </div>
      </section> : null}
    </div>
  </div>

  <div className="column">
    <div className="card">
      <h5>Peak</h5>
      <p className='price'>$23.99</p>
      <p className="desc">monthly recurring payment</p>
      <hr></hr>
      <p className="desc2">access to all clubs</p>
      <a className='srvcbtn' onClick={() => setHidden(s=>!s)}>SELECT</a>
      {!hidden ?<section className='sec2'>
        <div className="card2">
            <p className='inc'>INCLUDES</p>
            <ul className='fascility2'>
              <li>Cardio, Weights & Machines</li>
              <li>Locker Rooms with Showers</li>
              <li>Free Wi-Fi</li>
              <li>CrunchONE Kickoff</li>
              <li>Power Half Hour Circuit Training</li>
              <li>Group Fitness Classes</li>
              <li>Crunch Live Online Workouts</li>
              <li>Free T-shirt</li>
              <li>Ride Classes</li>
            </ul>
            <p className='avail'>AVAILABLE ADD-ONS</p>
            <ul className='fascility2'>
              <li>Personal Training</li>
            </ul>
        </div>
      </section>:null}
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      <h5>Base</h5>
      <p className='price'>$10.99</p>
      <p className="desc">monthly recurring payment</p>
      <hr></hr>
      <p className="desc2">access to this club</p>
      <a className='srvcbtn' onClick={() => setHidden(s=>!s)}>SELECT</a>
      {!hidden ?<section className='sec3'>
        <div className="card2">
            <p className='inc'>INCLUDES</p>
            <ul className='fascility3'>
              <li>Cardio, Weights & Machines</li>
              <li>Locker Rooms with Showers</li>
              <li>Free Wi-Fi</li>
              <li>CrunchONE Kickoff</li>
            </ul>
            <p className='avail'>AVAILABLE ADD-ONS</p>
            <ul className='fascility3'>
              <li>Personal Training</li>
            </ul>
        </div>
      </section>:null}
    </div>
    </div>
  </div>
      </div>
      <FooImg/>
    </div>
    </>
  )
}

export default Service