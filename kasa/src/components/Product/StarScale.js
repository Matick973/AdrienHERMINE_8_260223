import grayStar from '../../images/grayStar.png'
import orangeStar from '../../images/orangeStar.png'

const StarScale = ({ hostRating }) =>{
	
    const range = [1, 2, 3, 4, 5]

	return (
		<div>
			{range.map((rangeElem) =>
				hostRating >= rangeElem ? (
					<span key={rangeElem.toString()}><img src={orangeStar} className='' alt={`Etablissement noté ${hostRating} sur 5`}/></span>
				) : <span key={rangeElem.toString()}><img src={grayStar} className='' alt={`Etablissement noté ${hostRating} sur 5`}/></span>
			)}
		</div>
	)
}

export default StarScale