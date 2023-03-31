import React, { useState } from 'react'

const Principal = ({campusPolitecnico , logoEspam , imgFounder,campusImg , nacido , gerente , alcalde , vicepresidente , tumba , cerrar}) => {

    const [onBio, setOnBio] = useState(false)
    const [closeBio, setCloseBio] = useState(false)

    const handleClickBio = () => {
        setOnBio(!onBio)
        console.log()
    }
     
    const handleClickCloseBio = () => {
        setCloseBio(!closeBio)
    }
    const closeBioBtn = (closeBio) ? "close" : ""


    const lookBio = (onBio) ? "boxBio" : "boxBioOff"
  return (
   <>
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
            The Escuela Superior Politécnica Agropecuaria de Manabí Manuel Félix López, was born from the initiative of a great politician like <a onClick={handleClickBio} className='linkBioMfl flicker-2' href="#">{` `} Manuel Félix López</a> , <br /> Patron and mentor of this great educational work.
            </p>
        </div>
        
    </div>
    <div id={`${closeBioBtn}`} className={`${lookBio} slide-in-fwd-center`}>
        <div className='imgPrincipalBio'><img src={campusImg} alt="" /></div>
        <div >
        <img className='imgBioMflCt' src={imgFounder} alt="" />
        </div>
        <div className='namePositionMfl'><h3>Manuel Felix Lopez</h3></div>
        <div className='contMoreInfo'>
            <div>
                <img src={nacido} alt="" />
                <span>Junín , 17 noviembre 1937</span>
            </div>
            <div>
                <img src={gerente} alt="" />
                <span>Empresario</span>
            </div>
            <div>
                <img src={alcalde} alt="" />
                <span>Político</span>
            </div>
            <div>
                <img src={vicepresidente} alt="" />
                <span>Vicepresidente  del parlamento Andino</span>
            </div>
            <div>
                <img src={tumba} alt="" />
                <span> Portoviejo , 1 febrero 2004</span>
            </div>
        </div>
        <div>
     <img onClick={handleClickCloseBio} className={`${closeBioBtn} closeBio`} width={50} src={cerrar} alt="" />
        </div>
    </div>
   </>
  )
}

export default Principal