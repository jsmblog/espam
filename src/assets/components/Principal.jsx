import React from 'react'

const Principal = ({campusPolitecnico , logoEspam , imgFounder}) => {
  return (
    <div className='contPrincipal'>
        <div className='contImgCampus'>
            <img src={campusPolitecnico} alt="" />
        </div>
        <div className='contLogoEspam bounce-in-top'>
            <img src={logoEspam} alt="" />
        </div>
        <div className='nameUniversity bounce-in-right'>
            <h1>Escuela Superior Politécnica Agropecuaría Manabí M.F.L</h1>
        </div>
        <div className='contImgMfl flip-in-hor-top'>
            <div className='contImgFounder'>
            <img src={imgFounder} alt="" />
            </div>
        </div>
        <div className='paragraph'>
            <p>
            The Escuela Superior Politécnica Agropecuaria de Manabí Manuel Félix López, was born from the initiative of a great politician like Manuel Félix López, <br /> Patron and mentor of this great educational work.
            </p>
        </div>
        
    </div>
  )
}

export default Principal