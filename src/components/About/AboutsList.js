import React, { useEffect } from "react"
import { aboutList } from '../../datas/aboutData.js'
import About from "../../components/About/AboutItem.js"
import '../../style/Home.scss';

const AboutsList = () => {

        useEffect(() => {
        })

        return (
			
                <>
                    {aboutList.map(({  id, title, description, equipments }) => (
                        <About
                            key={id}
                            title={title}
                            description={description}
                            equipments={equipments}
                        />
                    ))}
                </>

        )
}

export default AboutsList