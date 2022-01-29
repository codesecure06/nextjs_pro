import styles from './index.module.scss'
import $ from 'jquery'
import Link from 'next/link'
import SelectEStore from '../SelectEStore'
import { useEffect, useState } from 'react'
import { getData, getProductGroups, getSearchTags } from '../apis'
import { useRouter } from 'next/dist/client/router'

function EStoreProductGroups({active, activeGroup, activeProduct}){
    const [showSearchTags, setShowSearchTags] = useState(false)
    const [productGroups, setProductGroups] = useState(null)
    const [searchTags, setSearchTags] = useState(null)
    
    const router = useRouter()
    const {product_group_id, product_id, status, search, service_group_id} = router.query

    useEffect(async () => {
        if(router.isReady){
            let data = await getProductGroups(active == "stocks" ? true : null, status && status != "All" ? status : null, active == "services" ? "Service" : "Product")
            if(await data.flash == true){
                setProductGroups(await data.temp)
            }
            let searchTagsData = await getSearchTags(active == "stocks" ? true : null, status && status != "All" ? status : null, active == "services" ? "Service" : "Product")
            if(await searchTagsData.flash == true){
                setSearchTags(await searchTagsData.search_tags)
            }
        }
    }, [router.query])

    function toggleProductDiv(){
        $(`.${styles.ProductsDiv}`).slideToggle(200)
    }
    return (
        <div className={styles.EStoreProductGroupsContainer}>
            <SelectEStore label="Product group" onChange={() => setShowSearchTags(!showSearchTags)} searchTags={showSearchTags}/>
            {
                showSearchTags ? (
                    <div className={[styles.SearchTagsDiv, "flex flex-col items-start"].join(" ")}>
                        {
                            searchTags != null ? searchTags.map((item) => {
                                return (
                                    <button key={item.listing_categries_id} className={[search && search.split(",").includes(item.industries_category_id) ? styles.Active : null, "truncate w-full text-left"].join(" ")} onClick={() => {
                                        let searchArray = search ? search.split(",") : []
                                        if(searchArray.includes(item.industries_category_id)){
                                            searchArray.splice(searchArray.indexOf(item.industries_category_id), 1)
                                        } else{
                                            searchArray.push(item.industries_category_id)
                                        }
                                        router.push(`/eStore-management${active == 'stocks' ? '/stocks' : active == 'services' ? '/services' : ''}${status ? `/?status=${status}` : ''}${status ? '&' : '?'}search=${searchArray}`)
                                    }}>{item.name}</button>
                                )
                            }) : null
                        }
                    </div>
                ) : (
                    <>
                    {
                        product_group_id || service_group_id ? (
                            <Link href={`/eStore-management${active == 'stocks' ? '/stocks' : active == 'services' ? '/services' : ''}${status ? `/?status=${status}` : ''}`}>
                                <div className={[styles.ProductGroup, "flex items-center justify-start relative cursor-pointer"].join(" ")}>
                                    <p>All ({productGroups != null ? productGroups.all.length : 0})</p>
                                    <div className={[styles.ProductsPopup, "absolute top-full left-1/2 transform -translate-x-1/2"].join(" ")}>
                                        <div className={styles.Products}>
                                            {
                                                productGroups != null ? productGroups.all['All Products'].map((productItem) => {
                                                    return (
                                                        <div key={productItem.product_id} className={styles.Product}>
                                                            <p>{productItem.product_name}</p>
                                                        </div>
                                                    )
                                                }) : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ) : (
                            <div className={styles.ActiveProductGroup}>
                                <div className={[styles.Heading, "flex items-center"].join(" ")}>
                                    <img src="/dashboard/images/icons/selected-notch-blue.svg"/>
                                    <div className={[styles.Title, "flex items-center justify-start cursor-pointer"].join(" ")} onClick={toggleProductDiv}>
                                        <p>All</p>
                                        {/* <img src="/dashboard/images/icons/down-arrow-blue.svg"/> */}
                                    </div>
                                </div>
                                {/* <div className={styles.ProductsDiv}>
                                    {
                                        productGroups != null ? productGroups.all['All Products'].map((product) => {
                                            return (
                                                <div key={product.id} className={[styles.Product, activeProduct == product.id ? styles.ActiveProduct : null].join(" ")}>
                                                    <Link href={`/eStore-management/${product.product_group_id}/${product.product_id}${active == "stocks" ? '/stock' : ''}${status ? `/?status=${status}` : ''}`}><p className="cursor-pointer">{product.product_name}</p></Link>
                                                </div>
                                            )
                                        }) : null
                                    }
                                </div> */}
                            </div>
                        )
                    }
                        {
                            productGroups != null ? (
                                productGroups.groups != null ? productGroups.groups.map((item) => {
                                    return (product_group_id && product_group_id == item.product_group_id) || (service_group_id && service_group_id == item.product_group_id) ? (
                                        <div key={item.product_group_id} className={styles.ActiveProductGroup}>
                                            <div className={[styles.Heading, "flex items-center"].join(" ")}>
                                                <img src="/dashboard/images/icons/selected-notch-blue.svg"/>
                                                <div className={[styles.Title, "flex items-center justify-start cursor-pointer"].join(" ")} onClick={toggleProductDiv}>
                                                    <p>{item.product_group_name}</p>
                                                    <img src="/dashboard/images/icons/down-arrow-blue.svg"/>
                                                </div>
                                                <div className={[styles.EditDiv, "flex-grow flex itmes-center justify-end"].join(" ")}>
                                                    <img src="/dashboard/images/icons/edit-blue.svg"/>
                                                </div>
                                            </div>
                                            <div className={styles.ProductsDiv}>
                                                {
                                                    item.products.map((product) => {
                                                        return (
                                                            <div key={product.id} className={[styles.Product, product_id == product.product_id ? styles.ActiveProduct : null].join(" ")}>
                                                                <Link href={`/eStore-management/${product_group_id}/${active == 'services' ? 'services' : 'products'}/${product.listing_id}${active == 'stocks' ? '/stock' : ''}${status ? `/?status=${status}` : ''}`}><p className="cursor-pointer truncate">{product.product_name || 'New Product'}</p></Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    ) : (
                                        <Link href={`/eStore-management${active == 'stocks' ? '/stocks' : active == 'services' ? '/services' : ''}/${item.product_group_id}/${active == 'services' ? 'services' : 'products'}${status ? `/?status=${status}` : ''}`}>
                                            <div className={[styles.ProductGroup, "flex items-center justify-start relative cursor-pointer"].join(" ")}>
                                                <p>{item.product_group_name} ({item.products.length})</p>
                                                <div className={[styles.ProductsPopup, "absolute top-full left-1/2 transform -translate-x-1/2"].join(" ")}>
                                                    <div className={styles.Products}>
                                                        {
                                                            item.products.map((productItem) => {
                                                                return (
                                                                    <div key={item.id} className={styles.Product}>
                                                                        <p className="truncate">{productItem.product_name || 'New Product'}</p>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                }) : (
                                    <div className={[styles.ProductGroup, "flex items-center justify-start relative"].join(" ")}>
                                        <p>No products available</p>
                                    </div>
                                )
                            ) : null
                        }
                    </>
                )
            }
        </div>
    )
}

export default EStoreProductGroups