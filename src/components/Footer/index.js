import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/KasaLogo.png'
import '../../style/Footer.scss'
import '../Header/index.js'
 
function Footer() {

    const [activePage, setActivePage] = useState(1)

    const togglePage = (i) =>{
        setActivePage(i)
        console.log(i)
    }
    
    return (
        <div className='footer-container'>

            <div className="logo-container">

                <NavLink to='/home' className="nav-link" onClick={() => togglePage(1)}>
                    <div className="kasa-logo" >
                        <img src={logo} alt="Logo Kasa"/>
                    </div>
                </NavLink>

            </div>

            <div className='reserved'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </div>
    )
}

export default Footer

/*Header Exporter dans route*/