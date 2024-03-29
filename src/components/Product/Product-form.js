import React from "react"
import { useParams } from 'react-router-dom'
import { appartementsList } from '../../datas/appartementsData'
import Slideshow from "./Slideshow";
import AboutItem from "../About/AboutItem";
import StarScale from "../Product/StarScale";

import '../../style/Home.scss';
import '../../style/Slideshow.scss'
import '../../style/Product.scss'
import ErrorPage from "../../pages/Error-page";

const ProductForm = () => {

    const { id } = useParams()                                                       //Recupere l'Id dans l'URL 

    const thisProduct = appartementsList.find(appart => appart.id === id)           //Correspondance Id de l'URL avec Id dans Data
        if ( thisProduct === undefined ) return <ErrorPage/>                        //Si Aucune correspendance alors Page 404
     

        return (
            <>  
                <div className="product-form">

                    <div className="slideshow-container">
                    <Slideshow pictures={thisProduct.pictures}/>
                    </div>

                    <section className="infos-product">

                        <div className="first-line">   
                            <div className="title">
                                <p>{thisProduct.title}</p>
                            </div>

                            <div className="host-profil desktop">
                                <p>{thisProduct.host.name}</p>
                                <img src={thisProduct.host.picture} className='host-picture' alt="pics du propriétaire"/>
                            </div>
                        </div>   

                        <div className="second-line">
                            <p>{thisProduct.location}</p>
                        </div>

                        <div className="third-line">
                            <div className="tags">{thisProduct.tags.map((tag , index) => { return ( <p key={index}>{tag}</p> )})}</div>
                            <div className='stars-container'>
                                <StarScale hostRating={thisProduct.rating}/>
                            </div>
                        </div>

                        <div className="display-mobile">
                            <div className='stars-container--desktop'>
                            <StarScale hostRating={thisProduct.rating}/>
                            </div>
                            <div className="host-profil--desktop">
                                <p>{thisProduct.host.name}</p>
                                <img src={thisProduct.host.picture} className='host-picture' alt="pics du propriétaire"/>
                            </div>
                        </div>

                        <div className="fourth-line">
                            <div className="collapse-product"><AboutItem className='about-card--product' title= 'Description' description={thisProduct.description} /></div>
                            <div className="collapse-product"><AboutItem className='about-card--product' title= 'Equipements' description={thisProduct.equipments.map((equipment, i) => (
                                <ul key={i}>
                                    <li>{equipment}</li>
                                </ul>
                            ))} /></div>
                        </div>

                        

                    </section>

                </div>
 
            </>
        )
            
}

export default ProductForm

//https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign
//  <Slideshow key={ id } pictures={ thisProduct.pictures } />