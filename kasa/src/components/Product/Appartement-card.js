import React from "react"
import { NavLink, Redirect } from "react-router-dom";
import '../../style/Home.scss';

const AppartementCard = ({ id, title, cover, description }) => {

    const handleClick = (e) => {
        e.preventDefault();
        e.currentTarget.classList.toggle('scale-out-center')
            let timeDelay = setTimeout(function () {
                window.location.href = `/appartement/${id}`
                window.clearTimeout(timeDelay);		// clear time out.
            }, 550);
    }

    return (
        <>
            <NavLink key={ id }  to={`/appartement/${id}`} >
                <div className='appartement-card' onClick={handleClick}>

                    <div className="appartement-card-inner">

                        <div className="appartement-card-front">
                            <div className="img-layout">
                                <img className='appartement-item-cover' src={cover} alt={`${title} cover`} />  
                            </div>
                            
                            <div className="card-title">
                                <p>{title}</p>
                            </div>
                        </div>
                        
                        <div className="appartement-card-back" >
                            <p>{ description }</p>
                            
                            <div>
                                <h3>En savoir plus</h3>
                            </div>
                        </div>
                          
                    </div>
		        </div>
            </NavLink>
        </>
    )
}

export default AppartementCard

//https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/Products.js:257-302

/**   
 * 
 * 
 *              <div className='appartement-card'>
                    <div className="img-layout">
                        <img className='appartement-item-cover' src={cover} alt={`${title} cover`} />  
                    </div>
			        
			        <div className="card-title">
                        <p >{title}</p>
                    </div>
		        </div> */