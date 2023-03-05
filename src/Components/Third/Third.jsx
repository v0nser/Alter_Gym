import React from 'react'
import './Third.css'
import section_start from '../../assets/images/section_present.svg'
import bodyimg from '../../assets/images/body.svg';
import rec3 from '../../assets/images/Rectangle34.svg'
import ell8 from '../../assets/images/Ellipse 8.svg'
import ell9 from '../../assets/images/Ellipse 9.svg'
import ell10 from '../../assets/images/Ellipse 10.svg'
import sec3 from '../../assets/images/section_presen2t.svg'
import g10 from '../../assets/images/g10.svg'
import g11 from '../../assets/images/g11.svg'
import g12 from '../../assets/images/g12.svg'
import sp3 from '../../assets/images/section_present3.svg'
import g13 from '../../assets/images/child6/Group 13.svg'
import g14 from '../../assets/images/child6/Group 14.svg'
import g15 from '../../assets/images/child6/Group 15.svg'
import g16 from '../../assets/images/child6/Group 16.svg'
import g17 from '../../assets/images/child6/Group 17.svg'
import g18 from '../../assets/images/child6/Group 18.svg'
// import rec1 from '../../assets/images/Rectangle9.svg'
// import rec2 from '../../assets/images/Rectangle8.svg'

function Third() {
  return (
    <>
    <div>
        <div className="parent">
            <div className="parent1">

                {/* <img className='rec1' src={rec1}/>
                <img className='rec2' src={rec2}/> */}
            <div className="child1">
                <img className='secstart' src={section_start} alt=".." />
                <img className='body' src={bodyimg} alt=".." />
            </div>
            <div className="child2">
                <img className='ell8' src={ell8} alt=".." />
                <img className='ell9' src={ell9} alt=".."/>
                <img className='rec3' src={rec3} alt=".." />
                <img className='ell10' src={ell10} alt=".." />
            </div>
            <div className="child3">
                <img src={sec3} className="c3" alt=".."/>
            </div>
            <div className="child4">
                <img className='g10' src={g10} alt=".."/>
                <img className='g11' src={g11} alt=".."/>
                <img className='g12' src={g12} alt=".."/>
            </div>

            <div className="child5">
                <img className='c5' src={sp3} alt=".."/>
            </div>
            <div className="child6">
                <div className="item">
                    <img className='g13' src={g13} alt=".."/>
                </div>
                <div className="item">
                    <img className='g14' src={g14} alt=".."/>
                </div>
                <div className="item">
                    <img className='g15' src={g15} alt=".."/>
                </div>
                <div className="item">
                    <img className='g16' src={g16} alt=".."/>
                </div>
                <div className="item">
                    <img className='g17' src={g17} alt=".."/>
                </div>
                <div className="item">
                    <img className='g18' src={g18} alt=".."/>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Third