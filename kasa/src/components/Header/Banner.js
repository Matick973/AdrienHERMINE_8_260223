import React, { useEffect, useState } from "react"
import homeBannerImg from "../../images/homeBanner.png"
import aboutBannerImg from "../../images/aboutBanner.png"
import '../../style/Banner.scss'

const Banner = () => {

        const [ isHome, setIsHome ] = useState(true)  

        useEffect(() => {

        const position = () =>{

                if (window.location.pathname !== '/home' )
                setIsHome(false)

        }

        position()

        })
        

        //console.log(window.location.pathname)
        //console.log(isHome)

        return (
                <>
                {isHome ? ( 
           
                        <div className="banner-container">

                                <div className="slogan">
                                <p>Chez vous, partout et ailleurs</p>
                                </div>

                                <div className="banner-img-layout">
                                <img src={homeBannerImg} alt="Bannière paysage bord de mer"/>
                                </div>
                        </div>

                ) :  
                
                (       <div className="banner-container">   
                                <img src={aboutBannerImg} alt="Bannière paysage montagne"/>
                        </div>) }
                </>
        )
}

export default Banner