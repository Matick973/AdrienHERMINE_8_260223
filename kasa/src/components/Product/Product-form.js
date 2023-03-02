import React from "react"
import { useParams } from 'react-router-dom'
import '../../style/Home.scss';
import Slideshow from "./Slideshow";
import { appartementsList } from '../../datas/appartementsData'
import '../../style/Slideshow.scss'
import '../../style/Product.scss'
import AboutItem from "../About/AboutItem";
import StarScale from "../Product/StarScale";

const ProductForm = () => {

    const { id } = useParams()                                                       //Recupere l'Id dans l'URL 
    const thisProduct = appartementsList.find(appart => appart.id === id)           //Correspondance Id de l'URL avec Id dans Data

        return (
            <>
                <div className="product-form">

                    <Slideshow pictures={thisProduct.pictures}/>

                    <section className="infos-product">

                    <div className="first-line">   
                        <div className="title">
                            <p>{thisProduct.title}</p>
                        </div>

                        <div className="host-profil">
                            <p>{thisProduct.host.name}</p>
                            <img src={thisProduct.host.picture} className='host-picture' alt="pics du propriétaire"/>
                        </div>
                    </div>   

                    <div className="second-line">
                        <p>{thisProduct.location}</p>
                    </div>

                    <div className="third-line">
                        <div className="tags">{thisProduct.tags.map((tag , index) => { return ( <p key={index}>{tag}</p> )})}</div>
                        <StarScale hostRating={thisProduct.rating}/>
                    </div>

                    <div className="fourth-line">
                        <div className="collapse-product"><AboutItem className='about-card--product' title= 'Description' description={thisProduct.description} /></div>
                        <div className="collapse-product"><AboutItem className='about-card--product' title= 'Equipements' description={thisProduct.equipments.map((equipment, i) => (
                            <ul key={i}>
                                <p>{equipment}</p>
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