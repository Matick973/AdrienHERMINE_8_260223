import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/KasaLogo.png'
 
function Footer() {
    
    return (
        <nav>
            
            <div className="logo-container">

                <NavLink to='/Home' className="nav-link">
                    <div className="logo" >
                        <img src={logo} alt="Logo Groupomania"/>
                    </div>
                </NavLink>

            </div>

            <div>
                <h3>© 2020 Kasa. All rights reserved</h3>
            </div>

        </nav>
    )
}

export default Footer

/*Header Exporter dans route*/