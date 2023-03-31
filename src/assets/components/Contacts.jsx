import React from 'react'

const Contacts = ({mapa, facebook , youtube , twiter , instagram , flickr}) => {
  return (
    <div id='contacts' className="contContacts">
        <div className='Contact'><h3>Contacts and Location</h3></div>
        <div className='smsContact'><h2>OPENING HOURS CENTRAL OFFICES | MONDAY TO FRIDAY |</h2></div>
        <div className='contHourAtt'>
            <div className='hourAtt'>
                <span className='flicker-2'>08:30 - 13:00 {`/`} 14:00 - 17:30 </span>
            </div>
        </div>
        <div className='contCardInfo'>
            <div className='boxContact heartbeat'>
                <img width={300} src={mapa} alt="" />
                <h4>Direction</h4>
                <span>5RF7+CF3 , Calceta</span>
                <h4>Foundation</h4>
                <span>30 April of the 1999 </span>
                <h4>Campus</h4>
                <span>Calceta - Manabí</span>
                <h4>Coords</h4>
                <span>0°49′35″S 80°11′11″O</span>

            </div>
            <div className='boxContact heartbeat'>
                <span>Contact Us</span>
                <h4> Central Offices </h4>
                <span>(593) 5- 2685 134 / 156</span>
                <h4>Vice-rectorate</h4>
                <span>(593) 5 - 3028 904</span>
                <h4>Evaluation Office</h4>
                <span>(593) 5 - 3021 542</span>
                <h4>Leveling and admission</h4>
                <span>(593) 5 - 302 8839</span>
                <h4>Postgraduate direction</h4>
                <span>(593) 5 - 302 4096</span>
            </div>
            <div className='boxContact heartbeat'>
                <span>Follow us on our social networks</span>
                <a target={'_blank'} href="https://www.facebook.com/espammfloficial/"><img width={50} src={facebook} alt="" /></a>
               <a target={'_blank'} href="https://twitter.com/espammfl?lang=es"> <img width={50} src={twiter} alt="" /></a>
                <a target={'_blank'} href="https://www.flickr.com/photos/espammfl/albums"><img width={50} src={flickr} alt="" /></a>
                <a target={'_blank'} href="https://www.youtube.com/channel/UCVfV2krD-xKVnvhNPZm_8Gw"><img width={50} src={youtube} alt="" /></a>
              <a target={'_blank'} href="https://www.instagram.com/espammfl/">  <img width={50} src={instagram} alt="" /></a>
            </div>
        </div>
        <div className='lastSection'>
            <div>
                <h5>All rights reserved @2023</h5>
                <h4>Made with <span>♥</span> by Joel M.</h4>
            </div>
        </div>
    </div>
  )
}

export default Contacts