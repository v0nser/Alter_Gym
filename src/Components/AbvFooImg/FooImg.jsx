import React from 'react'
import g10 from '../../assets/images/g10.svg'
import g11 from '../../assets/images/g11.svg'
import g12 from '../../assets/images/g12.svg'
import './FooImg.css'

function FooImg() {
  return (
    <div className='foot'>
         <p className='footxt'>Embrace Our Training Philosophy</p>
        <div className="fooimg">
                <img className='g10' src={g10} alt=".."/>
                <img className='g11' src={g11} alt=".."/>
                <img className='g12' src={g12} alt=".."/>
        </div>
    </div>
  )
}

export default FooImg