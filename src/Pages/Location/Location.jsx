import React from 'react'
import g26 from '../../assets/images/Location/g26.svg'
import g27 from '../../assets/images/Location/g27.svg'
import g28 from '../../assets/images/Location/g28.svg'
import g29 from '../../assets/images/Location/g29.svg'
import g31 from '../../assets/images/Location/g31.svg'
import rec21 from '../../assets/images/Location/rec21.svg'
import './Location.css'

function Location() {
  return (
    <>
    <div className="wrap">
      <div className="loc1">
        <h2 className='h2c'> Find an Altiral Gym Near You</h2>
      </div>
      <div className="loc2">
                <div className="locitem">
                    <img className='g26' src={g26} alt=".."/>
                </div>
                <div className="locitem">
                    <img className='g27' src={g27} alt=".."/>
                </div>
                <div className="locitem">
                    <img className='g28' src={g28} alt=".."/>
                </div>
                <div className="locitem">
                    <img className='g29' src={g29} alt=".."/>
                </div>
                <div className="locitem">
                    <img className='g31' src={g31} alt=".."/>
                    <div className="tag">
                    <img className='rec21' src={rec21} alt=".."/>
                    <div className="txt">CLUB <br/>COMING SOON</div>
                    </div>
                </div>
      </div>
      </div>
    </>
  )
}

export default Location