import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/KasaLogo.png'
 
function Header() {
    
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
            <Link to="/">Accueil</Link>
            <Link to="/profil">Profil</Link>
            </div>
        </nav>
    )
}

export default Header

/*Header Exporter dans route*/