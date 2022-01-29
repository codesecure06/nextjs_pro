import styles from './index.module.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import ScoreCircle from '../ScoreCircle'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { getData, updateInput } from '../apis'

function EStoreProductCard({activeTag, productId, score, product_name, product_images, price_range_from, price_range_to, unit, product_score, id}){
	const [productImage, setProductImage] = useState(null)
	const router = useRouter()
	const {product_group_id} = router.query
	const [priceFrom, setPriceFrom] = useState(null)
	const [priceTo, setPriceTo] = useState(null)
	const [allUnits, setAllUnits] = useState(null)
	useEffect(async () => {
		setPriceFrom(price_range_from)
		setPriceTo(price_range_to)
		setProductImage(product_images.length != 0 ? product_images[0].product_image : null)
		let unitsData = await getData("all_units")
		console.log(await unitsData)
		setAllUnits(await unitsData.temp)
	}, [price_range_from, price_range_to])

	let tempPriceRangeFrom = priceFrom
	let tempPriceRangeTo = priceTo
	let tempImage = productImage
	let index = 1
	let tags = [
		{
			id: index++,
			name: 'Post Luminaires'
		},
		{
			id: index++,
			name: 'Outdoor Light'
		},
		{
			id: index++,
			name: 'Post Luminaires'
		},
		{
			id: index++,
			name: 'Outdoor Light'
		}
	]
	function readIMG(input) {
        if (input.files && input.files[0]) {
			var imageArray = input.files
			Array.from(imageArray).forEach(image => {
				console.log(image)
				var reader = new FileReader();

				reader.onload = function (e) {
					// $('#preview').css('background-image', 'url('+e.target.result+')');
					var element = $("<div></div>").addClass(`${styles.SmallImageDiv} relative overflow-hidden`).css({
						'background-image': 'url('+e.target.result+')',
						'background-position': 'center',
						'background-size': 'cover',
						'background-repeat': 'no-repeat'
					});
					$(element).click(function(){
						setProductImage(e.target.result)
					})
					var gradient = $("<div></div>").addClass(`${styles.Gradient} absolute top-0 left-0 w-full h-full`)
					var closeDiv = $("<div></div>").addClass(`${styles.RemoveDiv} absolute`)
					var img = $("<img/>").attr("src", "/dashboard/images/icons/estore/close-circle-outline.svg").addClass("absolute cursor-pointer")
					element.append(gradient)
					element.append(closeDiv)
					closeDiv.append(img)
					$(`.images-div-${productId}`).append(element)
				}

				reader.readAsDataURL(image)
			})
        }
    }
	let productScore = null
	let scoreIcon = null
	switch(true){
		case product_score.grandTotal < 20:
			productScore = styles.LessLabel
			scoreIcon = 'low-score'
		break
		case product_score.grandTotal < 70:
			productScore = styles.MediumLabel
			scoreIcon = 'medium-score'
		break
		case product_score.grandTotal >= 70:
			productScore = styles.HighLabel
			scoreIcon = 'high-score'
		break
		default: productScore = null
	}
	let productScoreIndex = 1
	let productDetailedScore = [
		{
			id: productScoreIndex++,
			title: 'Basic Details',
			score: 100
		},
		{
			id: productScoreIndex++,
			title: 'Product Specifications',
			score: 81
		},
		{
			id: productScoreIndex++,
			title: 'Short Description',
			score: 66
		},
		{
			id: productScoreIndex++,
			title: 'Mapping/Tagging',
			score: 32
		},
		{
			id: productScoreIndex++,
			title: 'Additional Details',
			score: 100
		}
	]
	return (
		<div className={[styles.EStoreProductCardContainer, productScore, "relative"].join(" ")}>
			<div className={styles.EStoreProductCard}>
				<div className={[styles.CardHeader, "flex items-center justify-between"].join(" ")}>
					<div className="flex items-center">
						<div className={styles.ProductStatus}>
							<img src={`/dashboard/images/icons/product-card/${scoreIcon}.svg`}/>
						</div>
						<div className={[styles.ProductNameDiv, "truncate"].join(" ")}>
							<h2 className="w-1/2"><Link href={`/eStore-management/${product_group_id}/${id}`}>{product_name}</Link></h2>
						</div>
					</div>
					<div className="flex items-center">
						<div className={styles.StockButtonDiv}>
							<button className="flex items-center justify-between">
								<img src="/dashboard/images/icons/plus-orange.svg"/>
								<p>Stock</p>
							</button>
						</div>
						<div className={styles.MenuDiv}>
							<img src="/dashboard/images/icons/dots-vertical.svg"/>
						</div>
					</div>
				</div>
				<div className={[styles.ImageDiv, "relative"].join(" ")} style={{backgroundImage: 'url('+tempImage+')', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
					<div className={[styles.ImagesDiv, `absolute w-full bottom-0 left-0 flex overflow-x-auto`].join(" ")}>
						<div className={`flex images-div-${productId}`}>
							<label className={[styles.AddImageDiv, "flex items-center justify-center cursor-pointer"].join(" ")}>
								<input type="file" multiple={true} onChange={(e) => readIMG(e.target)}/>
								<img src="/dashboard/images/icons/estore/add-image.svg"/>
							</label>
							{
								product_images.map((item) => {
									return (
										<div key={item.id} className={[styles.SmallImageDiv, "relative overflow-hidden"].join(" ")} onClick={() => setProductImage(item.product_image)} style={{backgroundImage: `url(${item.product_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
											<div className={[styles.Gradient, "absolute top-0 left-0 w-full h-full"].join(" ")}></div>
											<div className={[styles.RemoveDiv, "absolute"].join(" ")}>
												<img src="/dashboard/images/icons/estore/close-circle-outline.svg" className="absolute cursor-pointer"/>
											</div>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className={styles.DetailsDiv}>
					<div className={[styles.PriceDiv, "flex items-center"].join(" ")}>
						<div className={[styles.InputDiv, "flex items-center"].join(" ")} style={{borderRadius: '7px'}}>
							<p>₹</p>
							<input type="number" defaultValue={tempPriceRangeFrom} onBlur={(e) => {
								updateInput("Listing", id, "price_range_from", e.target.value)
							}}/>
						</div>
						<p className={[styles.To, "text-center"].join(" ")}>to</p>
						<div className="flex items-center">
							<div className={[styles.InputDiv, "flex items-center"].join(" ")} style={{borderRadius: '7px 0px 0px 7px'}}>
								<p>₹</p>
								<input type="number" defaultValue={tempPriceRangeTo} onBlur={(e) => {
								updateInput("Listing", id, "price_range_to", e.target.value)
							}}/>
							</div>
							<select className={[styles.Select].join(" ")} style={{borderRadius: '0px 7px 7px 0px'}} onChange={(e) => {
								updateInput("Listing", id, "unit_id", e.target.value)
							}}>
								{
									allUnits != null ? allUnits.map((item) => {
										return (
											<option value={item.row_id} selected={item.row_id == unit[0].row_id}>{item.short_name != "" ? item.short_name : item.unit_name}</option>
										)
									}) : (
										<option>loading...</option>
									)
								}
							</select>
						</div>
					</div>
					<div className={styles.ProductSelectDiv}>
						<select className={styles.ProductSelect}>
							<option>LED Lights</option>
						</select>
					</div>
					<div className={[styles.TagsDiv, "flex flex-wrap"].join(" ")}>
						<div className={[styles.PlusDiv, "flex items-center justify-center"].join(" ")}>
							<img src="/dashboard/images/icons/plus-grey.svg"/>
						</div>
						{
							tags.map((item) => {
								return (
									<button key={item.id} className={[styles.TagsButton, "flex items-center justify-between"].join(" ")}>
										<p>{item.name}</p>
										<img src={`/dashboard/images/icons/remove-circle-blue.svg`}/>
									</button>
								)
							})
						}
					</div>
				</div>
			</div>
			{/* <div className={[styles.ProductDetailedScoreDiv, "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"].join(" ")}>
				<div className={styles.ScoreDiv}>
					<p>Score | <font>Medium</font></p>
				</div>
				{
					productDetailedScore.map((scoreItem) => {
						return (
							<div key={scoreItem.id} className={[styles.DetailsScoreDiv, "flex items-center justify-between"].join(" ")}>
								<p>{scoreItem.title}</p>
								<div className={styles.ScoreCircle}>
									<ScoreCircle/>
								</div>
							</div>
						)
					})
				}
			</div> */}
		</div>
	)
}

export default EStoreProductCard