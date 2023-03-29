import React, { useState } from 'react'

const NavBar = ({logoEspam , logoUser , menu}) => {
    const [isOn, setIsOn] = useState(false)

    const handleClickMenu = () => {
        setIsOn(!isOn)
    }
    const menuOnClick = (isOn) ? "menuIsOn" : ""
  return (
   <>
   <div className={`${menuOnClick} onoff`}>
    <h2>University</h2>
    <h2>News</h2>
    <h2>Carers</h2>
    <h2>Contacts</h2>
   </div>
    <div>
        <nav className='navBar'>
                <div className='contImgLogos'>
                    <div><img className='imgEspam' src={logoEspam} alt="logoEspam" /></div>
                    <div className='contImgUser heartbeat'>
                        <img className='imgUser' src={logoUser} alt="logoUser" />
                        <br/>
                            <span className='sga'>
                                S.G.A
                            </span>
                    </div>
                    <div>
                        <img onClick={handleClickMenu} className='positionMenu' width={50} src={menu} alt="" />
                    </div>
                </div>
                    <div className='contSelect'>
                        <div>
                            <select name="University" >
                                <option value="University">University</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <select name="News" >
                                <option value="News">News</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <select name="Careers" >
                                <option value="Careers">Careers</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                        <div>
                            <select name="Contacts" >
                                <option value="Contacts">Contacts</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                                <option value="Option 3">Option 3</option>
                            </select>
                        </div>
                    </div>
        </nav>
        
    </div>
   
   </>
  )
}

export default NavBar