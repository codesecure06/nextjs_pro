import BottomNavigationItem from '../BottomNavigationItem'
import { ChartSquareBarIcon, ChatIcon, CogIcon, CreditCardIcon, UserCircleIcon, ViewGridIcon } from '@heroicons/react/outline'
import SidebarItem, { minSidebarItem, openSidebarItem } from '../SidebarItem'
import SidebarTitle from '../SidebarTitle'
import Link from 'next/link'
import styles from './index.module.scss'
import $ from 'jquery'
import Toggle, { maxToggle, minToggle } from '../Toggle'
import { closeMenu, openMenu } from '../Header'
import { useEffect, useState } from 'react'
import { getUser } from '../apis'
import { getCookie, setCookie } from '../cookies'

function BottomNavigation({active}){
    const [user, setUser] = useState(null)

    let sidebar = getCookie("sidebar")
    let sidebarClass
    switch(sidebar){
        case "minimized": sidebarClass = styles.MinSidebar
        break
        case "closed": sidebarClass = styles.CloseSidebar
        break
        default: sidebarClass = null
    }

    useEffect(async () => {
        setUser(await null)
    }, [])
    let index = 0
    let is_seller = true
    let sideBar = [
        {
            id: index++,
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/home',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'company-profile',
            title: 'Company Profile',
            link: '/company-profile',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'estore-management',
            title: 'eStore Management',
            link: '/eStore-management',
            width: 37.5,
            show: is_seller
        },
        {
            id: index++,
            icon: 'leads',
            title: 'Lead Management',
            link: '/lead-management',
            width: 37.5,
            show: is_seller
        },
        {
            id: index++,
            icon: 'purchases',
            title: 'Purchases',
            link: '/purchases',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'album',
            title: 'Album',
            link: '/albums',
            width: 37.5,
            show: false
        },
        {
            id: index++,
            icon: 'reviews-ratings',
            title: 'Reviews Ratings',
            link: '/reviews-ratings',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'network',
            title: 'Network Program',
            link: '/network-program',
            width: 37.5,
            show: false
        },
        {
            id: index++,
            icon: 'profile',
            title: 'Profile',
            link: '/profile',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'reports',
            title: 'Reports',
            link: '/reports',
            width: 37.5,
            show: false
        },
        {
            id: index++,
            icon: 'messages',
            title: 'Messages',
            link: '/messages',
            width: 37.5,
            notification: true,
            show: false
        },
        {
            id: index++,
            icon: 'wallet',
            title: 'Wallet',
            link: '/wallet',
            width: 37.5,
            show: true
        },
        {
            id: index++,
            icon: 'settings',
            title: 'Settings',
            link: '/settings',
            width: 37.5,
            show: false
        }
    ]
    return (
        <>
        <div className="fixed md:hidden w-11/12 h-16 bottom-6 left-1/2 bg-white shadow-md rounded-2xl transform -translate-x-1/2">
            <div className="h-full flex items-center justify-evenly">
                <BottomNavigationItem Icon={ChartSquareBarIcon} active={true}/>
                <BottomNavigationItem Icon={CogIcon}/>
                <BottomNavigationItem Icon={ViewGridIcon}/>
                <BottomNavigationItem Icon={CreditCardIcon}/>
                <BottomNavigationItem Icon={ChartSquareBarIcon}/>
            </div>
        </div>
        
        <div className={[styles.Sidebar, sidebarClass, "hidden md:block bg-white flex-shrink-0 overflow-y-scroll"].join(" ")}>
            {/* <div className={[styles.BuyerSellerToggleDiv, "flex items-center justify-center"].join(" ")}>
                <div>
                    <Toggle leftText="Buyer" rightText="Seller"/>
                </div>
            </div> */}
            <div>
                {
                    sideBar.slice(0, 8).map((item) => {
                        return item.show ? (
                            <Link href={item.link} key={item.id}>
                                <div>
                                    <SidebarItem Icon={active == item.title ? `dashboard/${item.icon}-blue.svg` : `dashboard/${item.icon}.svg`} title={item.title} active={active == item.title ? true : false} iconSize={item.width} notification={item.notification}/>
                                </div>
                            </Link>
                        ) : null
                    })
                }
                <SidebarTitle title="Account"/>
                {
                    sideBar.slice(8, 14).map((item) => {
                        return item.show ? (
                            <Link href={item.link} key={item.id}>
                                <div>
                                    <SidebarItem Icon={active == item.title ? `dashboard/${item.icon}-blue.svg` : `dashboard/${item.icon}.svg`} title={item.title} active={active == item.title ? true : false} iconSize={item.width} notification={item.notification}/>
                                </div>
                            </Link>
                        ) : null
                    })
                }
            </div>
        </div>
        </>
    )
}

export default BottomNavigation

let sidebar = "opened"
export function minSidebar(){
    $(`.${styles.Sidebar}`).addClass(`${styles.MinSidebar}`)
    minSidebarItem()
    minToggle()
    closeMenu()
    sidebar = "minimized"
    setCookie("sidebar", sidebar)
}
export function closeSidebar(){
    $(`.${styles.Sidebar}`).addClass(`${styles.CloseSidebar}`)
    sidebar = "closed"
    openMenu()
    setCookie("sidebar", sidebar)
}
export function openSidebar(){
    $(`.${styles.Sidebar}`).removeClass(`${styles.MinSidebar}`)
    $(`.${styles.Sidebar}`).removeClass(`${styles.CloseSidebar}`)
    openSidebarItem()
    maxToggle()
    openMenu()
    sidebar = "opened"
    setCookie("sidebar", sidebar)
}
export function toggleSidebar(){
    if(sidebar == "opened"){
        minSidebar()
    } else if(sidebar == "minimized"){
        closeSidebar()
    } else{
        openSidebar()
    }
}