import React, { useState } from "react"
import { useParams } from 'react-router-dom'
import '../../style/Home.scss';
import Slideshow from "./Slideshow";
import { appartementsList } from '../../datas/appartementsData'
import LeftArrow from '../../images/LeftArrow.png'
import RightArrow from '../../images/RightArrow.png'
import '../../style/Slideshow.scss'
import '../../style/Product.scss'

const ProductForm = () => {

    const { id } = useParams()                                                       //Recupere l'Id dans l'URL 
    const thisProduct = appartementsList.find(appart => appart.id === id)           //Correspondance Id de l'URL avec Id dans Data

    const [current, setCurrent] = useState(0)
    const length = thisProduct.pictures.length

    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1 )                   //Si current(0) égale longeur du tableau - 1 (fin du tableau) alors reset current à 0 mais avec + 1
        console.log(current)
    }

    const previousSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current -1 )                    // Si current égale à 0, alors -1 mais si -1 current = 0 + 1 sinon juste - 1. 
        console.log(current)
    }

        return (
            <>
                <div className="product-form">

                    <section className="carousel">
                        
                        <div className="left-arrow" onClick={previousSlide}>
                        <img src={LeftArrow} alt="Carrousel de pics de l'appartement"/>
                        </div>

                        <div className="right-arrow" onClick={nextSlide}>
                        <img src={RightArrow} alt="Carrousel de pics de l'appartement"/>
                        </div>

                        {thisProduct.pictures.map((slide , index) => {
                            return ( 
                                <div className={index === current ? 'slide active' : 'slide' } key={index} >

                                    {index === current && 
                                        <img src={slide} key={index} className='carousel-picture' alt="Carrousel de pics de l'appartement"/>
                                    }
                                    
                                </div>

                            )     
                        })}
                    </section>

                    <h1>{thisProduct.title}</h1>
                    <p>{thisProduct.location}</p>
                    <p>{thisProduct.description}</p>
                </div>
 
        
            </>
        )
            
}

export default ProductForm

//https://www.youtube.com/watch?v=l1MYfu5YWHc&ab_channel=BrianDesign
//  <Slideshow key={ id } pictures={ thisProduct.pictures } />