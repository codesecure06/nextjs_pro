import styles from './index.module.scss'

function RatingStars({ratings}){
	let array = []
	for(let i=1; i<=Math.floor(ratings); i++){
		array.push('star-solid')
	}
	for(let i=1; i<=5-Math.floor(ratings); i++){
		array.push('star-outline')
	}
	return (
		<div className={[styles.RatingStarsContainer, "flex items-center justify-center"].join(" ")}>
			{
				array.map((item) => {
					return (
						<img src={`/dashboard/images/icons/reviews-ratings/${item}.svg`}/>
					)
				})
			}
		</div>
	)
}

export default RatingStars