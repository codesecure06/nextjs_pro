import { useState } from 'react'
import styles from './index.module.scss'

function GiveRating({ratings, form, id}){
	// let array = []
	// for(let i=1; i<=Math.floor(ratings); i++){
	// 	array.push('star-solid')
	// }
	// for(let i=1; i<=5-Math.floor(ratings); i++){
	// 	array.push('star-outline')
	// }
    const [rating, setRating] = useState(null)
    let array = [1, 2, 3, 4, 5]
	return (
		<div className={[styles.RatingStarsContainer, "flex items-center justify-center"].join(" ")}>
			{
                array.slice(0, rating).map((item) => {
					return (
						<img src={`/dashboard/images/icons/reviews-ratings/star-solid.svg`} onClick={() => setRating(item)}/>
					)
                })
            }
            {
                array.slice(rating, 5).map((item) => {
					return (
						<img src={`/dashboard/images/icons/reviews-ratings/star-outline.svg`} onClick={() => setRating(item)}/>
					)
                })
			}
            <input type="hidden" value={rating} form={form} id={id} required/>
		</div>
	)
}

export default GiveRating