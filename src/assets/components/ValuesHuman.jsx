import React from 'react'

const ValuesHuman = ({commitment , security , trust , honesty , responsibility , environment , impulse , noticias}) => {
  return (
    <>
    <div>
      <div className='characterized'>
        <h2>We are characterized by:</h2>
      </div>
      <div className='contValuesHuman'>
            <div className='positionCenterImg'>
              <img className='blink-2' src={commitment} alt="commitment" />
              <br/>
              <span className='flicker-2'>Commitment</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={security} alt="security" />
              <br/>
              <span className='flicker-2'>Security</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={trust} alt="trust" />
              <br/>
              <span className='flicker-2'>Trust</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={honesty} alt="honesty" />
              <br/>
              <span className='flicker-2'>Honesty</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={responsibility} alt="responsibility" />
              <br/>
              <span className='flicker-2'>Responsibility</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={environment} alt="environment" />
              <br/>
              <span className='flicker-2'>We take care of the environment</span>
            </div>
            <div className='positionCenterImg'>
              <img className='blink-2' src={impulse} alt="impulse" />
              <br/>
              <span className='flicker-2'>We promote economic development</span>
            </div>
      </div>
    </div>
    <div id='offerA' className='contOfferAcademic'>
      <div className='offerAcademic'>
        <h2>academic Offer of the ESPAM MFL</h2>
      </div>
      <div className='paragraphOffer'>
        <p>
        We offer young high school graduates an academic offer relevant to the area of ​​influence, scientific-technological advances and social demand. <br/> At the third level, we have 11 careers and we currently have 4 postgraduate programs in force.
        </p>
      </div>
    </div>
      <div id='news' className='textNews'>
        <h3  >News <span className='fade-in-top'>↓</span></h3>
      </div>
    </>
  )
}

export default ValuesHuman