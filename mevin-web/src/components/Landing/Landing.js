import React from 'react'
import './LandingStyles.css'
import applestore from '../../Assets/AppleStore.png'
import emoji from '../../Assets/emoji.png'
import loversPic from '../../Assets/lovers.png'
import phoneAd from '../../Assets/phone.png'
import playstore from '../../Assets/playstore.png'

function Landing() {
  return (
    <div className='intro'>
        <h1>From matches to Marriage:</h1>
        <h1 style={{ marginLeft: '7vw' }}>Your success story awaits</h1>
        <div className="rectangle">
            <p className='paragraph'>Harness the potential at your fingers: Download our mobile app and embark on your dating journey today</p>
           <div>
           <img src={playstore} alt="download" className="playstore" />
           <img src={applestore} alt="download" className="applestore" />
           </div>

            <img src={loversPic} alt="lover picture" className="lovers" />   
        </div>
        <img src={phoneAd} alt="ad" className="phonead" />   
    </div>
  )
}

export default Landing
