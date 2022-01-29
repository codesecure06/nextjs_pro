import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { addProduct, addService, getProducts, getStocksProducts, sortProducts } from '../apis'
import EStoreProductCard from '../EStoreProductCard'
import styles from './index.module.scss'
import LoadingScreen from '../LoadingScreen'
import ConfirmPopup from '../ConfirmPopup'
import NoDataAvailable from '../NoDataAvailable'

function EStoreProducts({active}){
    let productIndex = 1
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [showLoading, setShowLoading] = useState(false)
    const [showAddProductError, setShowAddProductError] = useState(false)
    const [noProducts, setNoProducts] = useState(false)
    const router = useRouter()
    const {product_group_id, status, search, sort, service_group_id} = router.query
    useEffect(async () => {
        setProducts(null)
        setNoProducts(false)
        setFilteredProducts(null)
        if(router.isReady){
            if(active == "stocks"){
                let data = await getStocksProducts(product_group_id, status && status != "All" ? status : null)
                if(data.flash == true){
                    if(sort){
                        setProducts(sortProducts(data.temp, sort, "Stock"))
                    } else{
                        setProducts(data.temp)
                    }
                } else{
                    setNoProducts(true)
                }
            } else if(active == "services"){
                let data = await getProducts(service_group_id ? service_group_id : null, status && status != "All" ? status : null, "Service")
                if(data.flash == true){
                    if(sort){
                        setProducts(sortProducts(data.seller_products, sort, "Listing"))
                    } else{
                        setProducts(data.seller_products)
                    }
                } else{
                    setNoProducts(true)
                }
            } else{
                let data = await getProducts(product_group_id ? product_group_id : null, status && status != "All" ? status : null, "Product", null, search ? search : null)
                if(data.flash == true){
                    if(sort){
                        setProducts(sortProducts(data.seller_products, sort, "Listing"))
                    } else{
                        setProducts(data.seller_products)
                    }
                } else{
                    setNoProducts(true)
                }
            }
        }
    }, [router])
    let addProductFunction = null

    let sortingLink = `/eStore-management/${active != "products" ? `${active}/` : ''}${status ? `?status=${status}&` : '?'}`
    return (
        <>
            <div className={[styles.EStoreProductsContainer].join(" ")}>
                <div className={[styles.EStoreProductsHeader, "flex items-center sticky"].join(" ")}>
                    <div className={[styles.SearchDiv, "flex flex-grow overflow-hidden"].join(" ")}>
                        <img src="/dashboard/images/icons/search-secondary.svg"/>
                        <input placeholder="Search" className="flex-grow" onKeyUp={(e) => {
                            if(e.target.value != null && e.target.value != ''){
                                let filteredArray = products != null ? products.filter((item) => {
                                    return item[active == "stocks" ? 'Stock' : 'Listing'].product_name != null && item[active == "stocks" ? 'Stock' : 'Listing'].product_name.toLowerCase().includes(e.target.value.toLowerCase())
                                }) : null
                                setFilteredProducts(filteredArray)
                            } else{
                                setFilteredProducts(null)
                            }
                        }}/>
                    </div>
                    <button className={[styles.AddProductButton, "flex items-center"].join(" ")} onClick={addProductFunction}>
                        {
                            showLoading ? (
                                <LoadingScreen/>
                            ) : (
                                <>
                                    <p>Add {active == "stocks" ? "Stock" : active == "services" ? "Service" : "Product"}</p>
                                    <img src="/dashboard/images/icons/plus.svg"/>
                                </>
                            )
                        }
                    </button>
                    {/* <div className={[styles.FilterDiv, "relative flex items-center justify-center cursor-pointer"].join(" ")}>
                        <img src="/dashboard/images/icons/estore/filter.svg"/>
                        <div className={[styles.DropdownDiv, "absolute right-0 flex justify-end"].join(" ")}>
                            <div>
                                <p className={styles.Active}>All</p>
                                <p>Products</p>
                                <p>Services</p>
                            </div>
                        </div>
                    </div> */}
                    <div className={[styles.SortDiv, "relative flex items-center justify-center cursor-pointer"].join(" ")}>
                        <img src="/dashboard/images/icons/estore/sort.svg"/>
                        <div className={[styles.DropdownDiv, "absolute right-0 flex justify-end"].join(" ")}>
                            <div>
                                <p className={sort && sort == "date_asc" ? styles.Active : null} onClick={() => {
                                    router.push(`${sortingLink}sort=date_asc`)
                                }}>Recent Modified</p>
                                <p className={sort && sort == "date_dsc" ? styles.Active : null} onClick={() => {
                                    router.push(`${sortingLink}sort=date_dsc`)
                                }}>Oldest Modified</p>
                                <p className={sort && sort == "score_asc" ? styles.Active : null} onClick={() => {
                                    router.push(`${sortingLink}sort=score_asc`)
                                }}>High score first</p>
                                <p className={sort && sort == "score_dsc" ? styles.Active : null} onClick={() => {
                                    router.push(`${sortingLink}sort=score_dsc`)
                                }}>Low score first</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={[styles.EStoreProduct, "flex flex-wrap"].join(" ")}>
                    <div className="flex flex-wrap flex-grow">
                        {
                            filteredProducts != null ? filteredProducts.map((item) => {
                                let card = null
                                switch(active){
                                    case 'products': card = <EStoreProductCard {...item.Listing} activeTag="Post Luminaires"/>
                                    break
                                    default: card = null
                                }
                                return (
                                    <div key={item.id} className={styles.EStoreProductCardDiv}>
                                        {card}
                                    </div>
                                )
                            }) : products != null ? products.map((item) => {
                                let card = null
                                switch(active){
                                    case 'products': card = <EStoreProductCard {...item.Listing} activeTag="Post Luminaires"/>
                                    break
                                    case 'stocks': card = <EStoreStockProductCard {...item.Stock} activeTag="Post Luminaires"/>
                                    break
                                    case 'services': card = <EStoreServiceCard {...item.Listing} activeTag="Post Luminaires"/>
                                    break
                                    default: card = null
                                }
                                return (
                                    <div key={item.id} className={styles.EStoreProductCardDiv}>
                                        {card}
                                    </div>
                                )
                            }) : noProducts ? (
                                <NoDataAvailable/>
                            ) : (
                                <div className="flex-grow">
                                    <LoadingScreen/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {
                showAddProductError ? (
                    <ConfirmPopup title="You already have half completed entries" onClickOk={() => {
                        setShowAddProductError(false)
                    }}/>
                ) : null
            }
            {/* {popup} */}
        </>
    )
}

export default EStoreProducts