import { BellIcon, MenuAlt1Icon, SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Notification from '../Notification'
import ProfileIcon from '../ProfileIcon'
import SearchBar from '../SearchBar'
import styles from './index.module.scss'
import { minSidebar, closeSidebar, openSidebar, toggleSidebar } from '../BottomNavigation'
import { useEffect, useState } from 'react'
import { toggleNotification } from '../Wrapper'
import BalanceHeader from '../BalanceHeader'
import $ from 'jquery'
import { getUser } from '../apis'

function Header(){
    const [user, setUser] = useState(null)
    const [menuState, setMenuState] = useState("opened")

    useEffect(async () => {
        let userData = await null
        setUser(await userData)
    }, [])
    return (
        <>
        <div className={[styles.HeaderContainer, "fixed top-0 left-0 w-full flex items-center justify-between md:bg-white"].join(" ")}>
            <div className="flex items-center">
                {
                    user != null && user.is_seller != "1" ? null : (
                        <div className={[styles.MenuIcon, "hidden md:flex items-center justify-center flex-grow-0 flex-shrink-0 cursor-pointer"].join(" ")} onClick={toggleSidebar}>
                            <img id="menu-icon" src="/dashboard/images/icons/header/menu-icon.svg"/>
                        </div>
                    )
                }
                <div className={[styles.LogoDiv, "flex-shrink-0 flex-grow-0"].join(" ")}>
                    <img src="/dashboard/images/logo/logo1-removebg-preview.png"/>
                </div>
                <div className={[styles.SearchBarDiv, "hidden md:block"].join(" ")}>
                    <SearchBar/>
                </div>
            </div>
            <div className="flex items-center justify-end">
                <div className={styles.WalletDiv}>
                    <BalanceHeader/>
                </div>
                <div className="flex-shrink-0" onClick={toggleNotification}>
                    <Notification/>
                </div>
                <div className={[styles.ProfileIconDiv].join("")}>
                    <ProfileIcon/>
                </div>
            </div>
        </div>
        <div className={styles.BelowHeader}></div>
        </>
    )
}

export default Header

export function openMenu(){
    $("#menu-icon").attr("src", "/dashboard/images/icons/header/menu-icon.svg")
}

export function closeMenu(){
    $("#menu-icon").attr("src", "/dashboard/images/icons/header/close-icon.svg")
}