import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/KasaLogo.png'
import '../../style/Header.scss'
 
function Header() {
    
const [activePage, setActivePage] = useState(1)

    const togglePage = (i) =>{
        setActivePage(i)
        console.log(i)
    }

    useEffect(() => {
    },[])

    return (
        <nav className='header-container'>

            <div className="logo-container">

                <NavLink to='/home' className="nav-link" onClick={() => togglePage(1)}>
                    <div className="logo" >
                        <img src={logo} alt="Logo Groupomania"/>
                    </div>
                </NavLink>

            </div>

            <div className='nav-menu'>
            <Link to="/home" onClick={() => togglePage(1)}><p className= {activePage === 1 ? "active-page" : ""} >Accueil</p></Link>
            <Link to="/about" onClick={() => togglePage(2)}><p className= {activePage === 2 ? "active-page" : ""} >A Propos</p></Link>
            </div>

        </nav>
        
    )
}

export default Header

/*Header Exporter dans route*/
/*https://www.youtube.com/watch?v=N1Lrv2BfT4k&ab_channel=LeDesignerduWeb-%C3%89coleduWeb*/ 