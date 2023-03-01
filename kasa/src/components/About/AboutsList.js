import React, { useEffect } from "react"
import { aboutList } from '../../datas/aboutData.js'
import About from "../../components/About/AboutItem.js"
import '../../style/Home.scss';

const AboutsList = () => {

        useEffect(() => {
        })

        return (

            <div>
			
                <ul className='abouts-list'>
                    {aboutList.map(({  id, title, description }) => (
                        <About
                            key={id}
                            title={title}
                            description={description}
                        />
                    ))}
                </ul>

		</div>

        )
}

export default AboutsList