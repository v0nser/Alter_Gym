import React from 'react'
import some from '../../assets/images/About/some may.svg'
import hrg from '../../assets/images/About/Rectangle 33.svg'
import book from '../../assets/images/About/book.png'
import g68 from '../../assets/images/About/Group 68.svg'
import p1 from '../../assets/images/About/istockphoto-1188433175-612x612 3.svg'
import p2 from '../../assets/images/About/istockphoto-1188433175-612x612 1.svg'
import uni from '../../assets/images/About/Group 72.svg'
import uni1 from '../../assets/images/About/Group 71.svg'
import uni2 from '../../assets/images/About/Group 75.svg'
import FooImg from '../../Components/AbvFooImg/FooImg'
import './About.css'

function About() {
  return (
    <>
    <div>
      <div className="abouttt">
        <div className="abtxt">
           <h6>About Us</h6>
        </div>
      </div>
      <div className="abtxt2">
        <img className='some' src={some} alt=".." />
      </div>
      <div className="hrg">
        <img src={hrg} alt=".."/>
      </div>
      <div className="abtt">
                <div className="itemm">
                    <div className="hg1">
                      <img src={book} alt=".." style={{width: "30%", height: "20%", marginLeft: "auto", marginRight: "auto"}}/>
                      <img src={g68} alt=".." style={{width: "300px", height: "200px", marginLeft: "auto", marginRight: "auto"}}/>
                    </div>
                </div>
                <div className="itemm">
                    <img src={p1} alt=".." style={{width: "400px", height: "200px", marginLeft: "auto", marginRight: "auto"}}/>
                </div>
                <div className="itemm">
                  <img src={p2} alt=".." style={{width: "400px", height: "200px", marginLeft: "auto", marginRight: "auto"}}/>
                </div>
                <div className="itemm">
                   <img src={uni} alt=".." style={{width: "30%", height: "20%", marginLeft: "auto", marginRight: "auto"}}/>  
                   <img src={uni1} alt=".." style={{width: "300px", height: "150px", marginLeft: "auto", marginRight: "auto"}}/>
                </div>
                <div className="itemm">
                  <img src={uni2} alt=".." style={{width: "400px", height: "200px", marginLeft: "auto", marginRight: "auto"}}/>
                </div>
                <div className="itemm">
                  <img src={p1} alt=".." style={{width: "400px", height: "200px", marginLeft: "auto", marginRight: "auto"}}/>
                </div>
            </div>
            <FooImg/>
    </div>
    </>
  )
}

export default About