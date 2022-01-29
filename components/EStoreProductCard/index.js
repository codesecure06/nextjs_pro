import styles from './index.module.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import ScoreCircle from '../ScoreCircle'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import { getData, getProductGroups, updateInput, deleteRow, uploadProductFile, getSingleProduct } from '../apis'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper';
import ConfirmPopup from '../ConfirmPopup'

// install Swiper modules
SwiperCore.use([Pagination]);

function EStoreProductCard({activeTag, productId, status, enabled, score, product_name, product_images, price_range_from, price_range_to, products_group_id, unit, product_score, id, product_category}){
	const [productImage, setProductImage] = useState([])
	const [productImageId, setProductImageId] = useState(null)
	const router = useRouter()
	const {product_group_id} = router.query
	const [priceFrom, setPriceFrom] = useState(null)
	const [priceTo, setPriceTo] = useState(null)
	const [allUnits, setAllUnits] = useState(null)
	const [showDetails, setShowDetails] = useState(false)
	const [productGroups, setProductGroups] = useState([])
	const [showDeleteProduct, setShowDeleteProduct] = useState(false)
	const [showDeleteProductImage, setShowDeleteProductImage] = useState(false)
	const [showInactivePopup, setShowInactivePopup] = useState(false)
	useEffect(async () => {
		setPriceFrom(price_range_from)
		setPriceTo(price_range_to)
		setProductImage(product_images)
		setProductImageId(product_images.length != 0 ? product_images[0].image_row_id : null)
		let data = await getProductGroups()
		if(await data.flash == true){
			setProductGroups(await data.temp.groups)
		}
		let unitsData = await getData("all_units")
		setAllUnits(await unitsData.temp)
		// $(`#details-div-${id}`).mouseenter(function(){
		// 	$(`#below-details-div-${id}`).slideDown(200)
		// })
		// $(`#details-div-${id}`).mouseleave(function(){
		// 	$(`#below-details-div-${id}`).slideUp(200)
		// })
	}, [price_range_from, price_range_to])

	let tempPriceRangeFrom = priceFrom
	let tempPriceRangeTo = priceTo
	function readIMG(input) {
        if (input.files && input.files[0]) {
			var imageArray = input.files
			Array.from(imageArray).forEach(async image => {
				var reader = new FileReader();
                let imageData = await uploadProductFile(id, image)
				if(await imageData.flash == true){
					let productData = await getSingleProduct(id)
					if(await productData.flash ==  true){
						setProductImage(await productData.temp.Listing.product_images)
						setProductImageId(await productData.temp.Listing.product_images[0].image_row_id)
					}
				}

				// reader.onload = function (e) {
				// 	// $('#preview').css('background-image', 'url('+e.target.result+')');
				// 	var element = $("<div></div>").addClass(`${styles.SmallImage} flex-shrink-0`).css({
				// 		'background-image': 'url('+e.target.result+')',
				// 		'background-position': 'center',
				// 		'background-size': 'cover',
				// 		'background-repeat': 'no-repeat'
				// 	});
				// 	$(element).click(function(){
				// 		setProductImage(e.target.result)
				// 	})
				// 	// var gradient = $("<div></div>").addClass(`${styles.Gradient} absolute top-0 left-0 w-full h-full`)
				// 	// var closeDiv = $("<div></div>").addClass(`${styles.RemoveDiv} absolute`)
				// 	// var img = $("<img/>").attr("src", "/dashboard/images/icons/estore/close-circle-outline.svg").addClass("absolute cursor-pointer")
				// 	// element.append(gradient)
				// 	// element.append(closeDiv)
				// 	// closeDiv.append(img)
				// 	$(`#images-div-${id}`).append(element)
				// }

				// reader.readAsDataURL(image)
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
	switch(status){
		case "Approved":
			scoreIcon = 'approved-product'
		break
		case "Pending":
			scoreIcon = 'pending-product'
		break
		case "Rejected":
			scoreIcon = 'rejected-product'
		break
		default: scoreIcon = 'rejected-product'
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
		<>
			<div id={`product-card-${id}`} className={[styles.EStoreProductCardContainer, productScore, "relative"].join(" ")}>
				<div className={[styles.EStoreProductCard, showDetails ? styles.DetailedProductCard : null, "h-full flex flex-col"].join(" ")}>
					<div className={[styles.ImageDiv, "relative flex-grow flex-shrink cursor-pointer"].join(" ")} onClick={() => {
						if(status == "Approved"){
							router.push(`/eStore-management/${product_group_id ? product_group_id : products_group_id ? products_group_id : null}/products/${id}`)
						} else{
							router.push(`/eStore-management/?edit_product=${id}`)
						}
					}} style={{backgroundImage: `url(${productImage.length != 0 && productImage.filter((item) => item.image_row_id == productImageId).length != 0 ? productImage.filter((item) => item.image_row_id == productImageId)[0].product_image : null})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat'}}>
						<div className={[styles.MenuDiv, "absolute cursor-pointer"].join(" ")} onClick={(e) => e.stopPropagation()}>
							<img src="/dashboard/images/icons/dots-vertical-white.svg"/>
							<div className={styles.DropdownDiv}>
								{
									status == "Approved" ? (
										<div onClick={() => setShowInactivePopup(true)}>{enabled == "0" ? 'Make active' : 'Make inactive'}</div>
									) : null
								}
								<div onClick={() => {
									router.push(`?edit_product=${id}`)
								}}>Edit</div>
								{
									status != "Approved" ? (
										<div onClick={() => setShowDeleteProduct(true)}>Delete</div>
									) : null
								}
							</div>
						</div>
						{
							productImage.length != 0 ? (
								<div className={[styles.CloseDiv, "absolute cursor-pointer"].join(" ")} onClick={(e) => {
									e.stopPropagation()
									setShowDeleteProductImage(true)
								}}>
									<img src="/dashboard/images/icons/product-card/remove-white.svg"/>
								</div>
							) : null
						}
						<div id={`images-div-${id}`} className={[styles.SmallImagesDiv, "flex items-center absolute bottom-0 left-0 w-full overflow-x-auto"].join(" ")} onClick={(e) => e.stopPropagation()}>
							<label className={[styles.AddImageDiv, "flex items-center justify-center flex-shrink-0 cursor-pointer"].join(" ")}>
								<img src="/dashboard/images/icons/product-card/plus-thick.svg"/>
								<input type="file" multiple={true} onChange={(e) => {
									e.stopPropagation()
									readIMG(e.target)
								}}/>
							</label>
							{
								productImage.length != 0 ? productImage.map((item) => {
									return (
										<div className={[styles.SmallImage, "flex-shrink-0"].join(" ")} onClick={() => setProductImageId(item.image_row_id)} style={{backgroundImage: `url(${item.product_image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
									)
								}) : null
							}
						</div>
					</div>
					<div id={`details-div-${id}`} className={styles.DetailsDiv} onMouseOver={(event) => {
							// var e = event.toElement || event.relatedTarget;
							// if (e.parentNode == event.target || e == event.target) {
								// $(event.target).siblings(`.${styles.BelowDetailsDiv}`).slideDown(200)
							// }
						}} onMouseOut={(event) => {
							// var e = event.toElement || event.relatedTarget;
							// if (e.parentNode == this || e == this) {
								// $(event.target).siblings(`.${styles.BelowDetailsDiv}`).slideUp(200)
							// }
						}}>
						<div className={[styles.CardHeader, "flex items-center justify-between flex-grow-0 flex-shrink-0"].join(" ")}>
							<div className="flex items-center">
								<div className={styles.ProductStatus}>
									<img src={`/dashboard/images/icons/product-card/${scoreIcon}.svg`}/>
								</div>
								<div className={[styles.ProductNameDiv, "truncate"].join(" ")}>
									<h2 className="w-1/2"><Link href={status == 'Approved' ? `/eStore-management/${product_group_id ? product_group_id : products_group_id ? products_group_id : null}/products/${id}` : `/eStore-management/?edit_product=${id}`}>{product_name ? product_name : 'New product'}</Link></h2>
								</div>
							</div>
							{/* <div className="flex items-center">
								<div className={styles.MenuDiv}>
									<Link href={`?edit_product=${id}`}><img className="cursor-pointer" src="/dashboard/images/icons/pencil.svg"/></Link>
								</div>
							</div> */}
						</div>
						<div id={`below-details-div-${id}`} className={[styles.BelowDetailsDiv, "overflow-y-auto"].join(" ")}>
							<div className={[styles.PriceDiv, "flex items-center"].join(" ")}>
								<div className={[styles.InputDiv, "flex items-center"].join(" ")}>
									<p>₹</p>
									<input type="number" className="flex-grow text-right" defaultValue={tempPriceRangeFrom} onBlur={(e) => {
										updateInput("Listing", id, "price_range_from", e.target.value)
									}}/>
								</div>
								<p className={[styles.To, "text-center"].join(" ")}>to</p>
								<div className="flex items-center">
									<div className={[styles.InputDiv, "flex items-center"].join(" ")}>
										<p>₹</p>
										<input type="number" className="flex-grow text-right" defaultValue={tempPriceRangeTo} onBlur={(e) => {
										updateInput("Listing", id, "price_range_to", e.target.value)
									}}/>
									</div>
								</div>
								<select className={[styles.Select, "w-full flex-shrink-0"].join(" ")} onChange={(e) => {
									updateInput("Listing", id, "unit_id", e.target.value)
								}}>
									{
										allUnits != null ? allUnits.map((item) => {
											return (
												<option value={item.row_id} selected={unit.length != 0 && item.row_id == unit.row_id}>{item.short_name != "" ? item.short_name : item.unit_name}</option>
											)
										}) : (
											<option>loading...</option>
										)
									}
								</select>
							</div>
							<div className={styles.ProductSelectDiv}>
								<select className={styles.ProductSelect} onChange={(e) => updateInput("Listing", id, "products_group_id", e.target.value)}>
									<option>Select product group</option>
									{
										productGroups != null ? productGroups.map((item) => {
											return (
												<option value={item.product_group_id} selected={item.product_group_id == products_group_id}>{item.product_group_name}</option>
											)
										}) : null
									}
								</select>
							</div>
							<div className={[styles.TagsDiv, "flex flex-wrap"].join(" ")}>
								{/* <div className={[styles.PlusDiv, "flex items-center justify-center"].join(" ")}>
									<img src="/dashboard/images/icons/product-card/plus-circle-orange.svg"/>
								</div> */}
								{
									product_category != null ? product_category.map((item) => {
										return (
											<button key={item.id} className={[styles.TagsButton, "flex items-center justify-between"].join(" ")}>
												<p>{item.name}{item.listings_category_id}</p>
												<img src={`/dashboard/images/icons/product-card/remove-circle-grey.svg`} onClick={async (e) => {
													let deleteData = await deleteRow("ListingsProductsIndustriesCategory", item.listings_category_id)
													if(deleteData.flash == true){
														$(e.target).parent().remove()
													}
												}}/>
											</button>
										)
									}) : null
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			{
				showDeleteProduct ? (
					<ConfirmPopup title="Do you want to delete this product" onClickNo={() => setShowDeleteProduct(false)} onClickYes={async () => {
						let deleteData = await deleteRow("Listing", id)
						if(await deleteData.flash == true){
							router.reload()
						}
					}}/>
				) : null
			}
			{
				showDeleteProductImage ? (
					<ConfirmPopup title="Do you want to delete this image" onClickNo={() => setShowDeleteProductImage(false)} onClickYes={async () => {
						let deleteData = await deleteRow("ListingsProductsImage", productImageId)
						if(await deleteData.flash == true){
							setProductImage(productImage.filter((item) => item.image_row_id != productImageId))
							setProductImageId(productImage.filter((item) => item.image_row_id != productImageId).length != 0 ? productImage.filter((item) => item.image_row_id != productImageId)[0].image_row_id : null)
							setShowDeleteProductImage(false)
						}
					}}/>
				) : null
			}
			{
				showInactivePopup ? (
					<ConfirmPopup title={`Do you want to make this product${enabled == "0" ? " active" : " inactive"}`} onClickNo={() => setShowInactivePopup(false)} onClickYes={async () => {
						let deleteData = await updateInput("Listing", id, "enabled", enabled == "1" ? 0 : 1)
						if(await deleteData.flash == true){
							router.reload()
						}
					}}/>
				) : null
			}
		</>
	)
}

export default EStoreProductCard