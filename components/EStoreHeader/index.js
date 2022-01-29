import EStoreTab from "../EStoreTab"
import Heading from "../Heading"
import styles from './index.module.scss'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router"
import ScoreMeter from '../ScoreMeter'

import { useEffect, useState } from "react"
import { closeOpacity } from "../BlackOpacityDiv"

function EStoreHeader({active, activeTab}){
    let index = 1
    const router = useRouter()
    const {status, edit_product, edit_stock, edit_service} = router.query
    const [productsCount, setProductsCount] = useState(null)
    activeTab = status
    useEffect(async () => {
        closeOpacity()
    }, [router.query])
    let tabs = [
        {
            id: index++,
            title: 'Products',
            score: 34,
            link: '/eStore-management'
        },
        {
            id: index++,
            title: 'Stocks',
            score: 34,
            link: '/eStore-management/stocks'
        },
        {
            id: index++,
            title: 'Services',
            score: 34,
            link: '/eStore-management/services'
        }
    ]
    let statusIndex = 1
    let statusTabs = [
        {
            id: statusIndex++,
            name: 'All',
            number: productsCount != null ? productsCount[active].all : 0,
            link: `/eStore-management${active != 'products' ? `/${active}` : ''}/?status=All`,
            active: status ? false : true
        },
        {
            id: statusIndex++,
            name: 'Approved',
            number: productsCount != null ? productsCount[active].approved : 0,
            link: `/eStore-management${active != 'products' ? `/${active}` : ''}/?status=Approved`
        },
        {
            id: statusIndex++,
            name: 'Not Approved',
            number: productsCount != null ? productsCount[active].pending : 0,
            link: `/eStore-management${active != 'products' ? `/${active}` : ''}/?status=Pending`
        },
        {
            id: statusIndex++,
            name: 'Rejected',
            number: productsCount != null ? productsCount[active].rejected : 0,
            link: `/eStore-management${active != 'products' ? `/${active}` : ''}/?status=Rejected`
        },
        {
            id: statusIndex++,
            name: 'Inactive',
            number: productsCount != null ? productsCount[active].in_active : 0,
            link: `/eStore-management${active != 'products' ? `/${active}` : ''}/?status=Inactive`
        }
    ]
    return (
        <>
            <div className={[styles.EStoreHeaderContainer, "relative"].join(" ")}>
                <div className={styles.HeadingDiv}>
                    <Heading heading="eStore Management"/>
                </div>
                <div className={[styles.EStoreTabs, "flex items-start"].join(" ")}>
                    {
                        tabs.map((item) => {
                            return (
                                <Link key={item.id} href={item.link}>
                                    <div className={[styles.EStoreTab, "cursor-pointer"].join(" ")}>
                                        <EStoreTab title={item.title} active={active == item.title.toLowerCase() ? true : false} score={item.score}/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className={[styles.StatusTabs, "flex items-center justify-start"].join(" ")}>
                    {
                        statusTabs.map((item) => {
                            return (
                                <div key={item.id} className={[styles.StatusTabDiv, "cursor-pointer"].join(" ")}>
                                    <Link href={item.link}>
                                        <div className={[styles.StatusTabContainer, item.active ? styles.Active : null, activeTab == item.name ? styles.Active : null, "flex items-center justify-center"].join(" ")}>
                                            <p>{item.name}</p>
                                            <span>&nbsp;({item.number})</span>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={[styles.ScoreMeterDiv, "absolute top-0 right-0 h-full flex items-center justify-center"].join(" ")}>
                    <div className={styles.ScoreMeter}>
                        <ScoreMeter score="80"/>
                    </div>
                    <img src="/dashboard/images/score-estore.png"/>
                </div>
            </div>
        </>
    )
}

export default EStoreHeader