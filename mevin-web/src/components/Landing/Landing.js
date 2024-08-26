import React from 'react'
import './LandingStyles.css'
import applestore from '../../Assets/Applestore.png'
import emoji from '../../Assets/emoji.png'
import loversPic from '../../Assets/lovers.png'
import phoneAd from '../../Assets/phone.png'
import playstore from '../../Assets/Playstore (2).png'

function Landing() {
  return (
    <div className='intro'>
      <h1>From matches to Marriage:</h1>
      <h1 style={{ marginLeft: '7vw' }}>Your success story awaits</h1>
      <div className="rectangle">
        <div>
          <p className='paragraph Harnes-p'>
            Harness the potential at your fingers: Download our mobile app and embark on your dating journey today
          </p>
          <div className="sep">
            <div className='blackbox'>
              <img src={playstore} alt="Google PlayStore" />  
              <div className="getOn">
                <p>GET ON</p> 
                <p>Google PlayStore</p>
              </div>
            </div>
            <div className="blackbox">
              <img src={applestore} alt="Apple Store" /> 
              <div className="getOn">
                <p>Download on</p> 
                <p>Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <img src={loversPic} alt="lover picture" className="lovers" /> 
          <div className="Emoji">
          <img src={emoji} alt="ad" className="emoji" />  
            </div> 
      </div>
      <img src={phoneAd} alt="ad" className="phonead" /> 

       
    </div>
  )
}

export default Landing
