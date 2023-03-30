import React from 'react'

const Rules = ({admision, reglamentacion , transparencia ,merecer , biblioteca}) => {
  return (
    <div>
        <div className='moreInfo'><h2>More information</h2></div>
        <div className='contMoreInfoCard'>
            <div className="rulesCard flicker-2"><span>Admission</span><img src={admision} alt="" /></div>
            <div className="rulesCard flicker-2"><span>Regulation</span><img src={reglamentacion} alt="" /></div>
            <div className="rulesCard flicker-2"><span>Transparency</span><img src={transparencia} alt="" /></div>
            <div className="rulesCard flicker-2"><span>Contest</span><img src={merecer} alt="" /></div>
            <div className="rulesCard flicker-2"><span>Libray</span><img src={biblioteca} alt="" /></div>
        </div>
    </div>
  )
}

export default Rules