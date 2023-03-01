import React, { useState } from "react"
import '../../style/About.scss';
import ArrowImg from '../../images/Vector.png'

const AboutItem = ({ id, title, description }) => {

    const [ isOpen, setIsOpen ] = useState(false)

    const toggleOpen = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

        return (

            <div className='about-card' onClick={toggleOpen}>
                <li className='about-item'>
                    
			        <div className="about-card-title">
                        <p >{title}</p>
                        <div className= {isOpen ? "arrow--active" : "arrow--inactive"}>
                            <img src={ArrowImg} alt={`${title} cover`} />  
                        </div>    
                    </div>
                    
                    <div className= {isOpen ? "about-dropdown-text--active" : "about-dropdown-text--inactive"}>
                        <p >{description}</p>
                    </div>
		        </li>
		    </div>

        )
}

export default AboutItem