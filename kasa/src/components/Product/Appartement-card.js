import React from "react"
import { NavLink } from "react-router-dom";
import '../../style/Home.scss';

const AppartementCard = ({ id, title, cover }) => {

        return (

            <NavLink key={ id } to={`/appartement/${id}`} >
            <div className='appartement-card'>
                <li className='appartement-item'>
                    <div className="img-layout">
                        <img className='appartement-item-cover' src={cover} alt={`${title} cover`} />  
                    </div>
			        
			        <div className="card-title">
                        <p >{title}</p>
                    </div>
		        </li>
		    </div>
            </NavLink>
        )
}

export default AppartementCard

//https://codesandbox.io/s/react-router-product-detail-pages-dynamic-links-tmcjc?file=/src/Products.js:257-302