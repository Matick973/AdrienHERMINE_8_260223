import React, { useEffect } from "react"
import { appartementsList } from '../../datas/appartementsData'
import AppartementCard from "./Appartement-card"
import '../../style/Home.scss';

const AppartementsList = () => {

        useEffect(() => {
        })

        return (

            <div>
			
                <ul className='appartements-list'>
                    {appartementsList.map(({  id, title, cover, pictures, description, host, rating, location, equipements, tags }) => (
                        <AppartementCard
                            key={id}
                            id={id}
                            title={title}
                            cover={cover}
                            pictures={pictures}
                            description={description}
                            host={host}
                            rating={rating}
                            location={location}
                            equipements={equipements}
                            tags={tags}
                        />
                    ))}
                </ul>

		</div>

        )
}

export default AppartementsList