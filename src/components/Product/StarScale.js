import grayStar from '../../images/grayStar.png'
import orangeStar from '../../images/orangeStar.png'
import'../../style/Product.scss'

const StarScale = ({ hostRating }) =>{
	
    const range = [1, 2, 3, 4, 5]

	return (
		<>
			{range.map((rangeElem) =>
				hostRating >= rangeElem ? (
					<span key={rangeElem.toString()}><img src={orangeStar} className='' alt={`Etablissement noté ${hostRating} sur 5`}/></span>
				) : <span key={rangeElem.toString()}><img src={grayStar} className='' alt={`Etablissement noté ${hostRating} sur 5`}/></span>
			)}
		</>
	)
}

export default StarScale