import { ChevronDownIcon } from "@heroicons/react/outline"
import ButtonDesign from "../ButtonDesign"
import ProfileMenu from "../ProfileMenu"
import styles from './index.module.scss'
import $ from 'jquery'
import { deleteCookie } from "../cookies"
import { getUrl, getUser } from "../apis"
import { useEffect, useState } from "react"
import Link from 'next/link'
import RatingStars from '../RatingStars'

function  ProfileIcon(){

    const [user, setUser] = useState(null)

    useEffect(async () => {
        setUser(await null)
    }, [])
    function toggleMenu(){
        let menu = document.getElementById("profile-menu")
        let act_menu = document.getElementById("profile-menu-act")
        if(menu.classList.contains("hidden")){
            $(menu).fadeIn(200)
            menu.classList.remove("hidden")
            $(act_menu).animate({
                "right": "0"
            }, 200)
            act_menu.classList.remove("hidden")
        } else{
            $(menu).fadeOut(200)
            menu.classList.add("hidden")
            $(act_menu).animate({
                "right": "-428px"
            }, 200)
            act_menu.classList.add("hidden")
        }
    }
    return (
        <>
            <div className={[styles.ProfileIconContainer, "flex items-center justify-center cursor-pointer"].join(" ")} onClick={toggleMenu}>
                <div className={[styles.ProfileImageDiv, "flex items-center justify-center"].join(" ")}>
                    <div style={{backgroundImage: `url(${user != null ? user.profile_picture : null})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                </div>
                {/* <div className="ml-5 hidden md:flex items-center">
                    <p className="text-sm">Rajat Sharma</p>
                    <ChevronDownIcon className="w-5 h-5 ml-2 text-secondary"/>
                </div> */}
            </div>
            <div id="profile-menu" onClick={toggleMenu} className="opacity-background fixed w-full h-full top-0 left-0 hidden z-40"></div>
            <div id="profile-menu-act" className={[styles.ProfileMenu, "fixed right-0 bg-white z-50 overflow-y-auto"].join(" ")}>
                <div className="flex items-center justify-center">
                    <div className={[styles.MenuProfileImageDiv, "flex items-center justify-center"].join(" ")}>
                        <Link href="/profile">
                            <div className="cursor-pointer" style={{backgroundImage: `url(${user != null ? user.profile_picture : null})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
                        </Link>
                    </div>
                </div>
                <div className={styles.RatingDiv}>
                    {<RatingStars ratings={user != null ? (user.is_seller ? user.seller_rating : user.buyer_rating) : null}/>}
                </div>
                <div className={[styles.DetailsDiv].join(" ")}>
                    <p className={[styles.NameDiv, "text-center"].join(" ")}>{user != null ? user.first_name + " " + user.last_name : "Guest"}</p>
                    <p className={[styles.EmailDiv, "mt-1 text-default text-xs text-center"].join(" ")}>{user != null ? user.email : null}</p>
                    <p className={[styles.PhoneNumberDiv, "mt-1 text-default text-xs text-center"].join(" ")}>{user != null ? user.contact_number : null}</p>
                </div>
                <div className={[styles.ProfileMenuDiv].join(" ")}>
                    <ProfileMenu/>
                </div>
                <div className={[styles.SignOutDiv].join(" ")}>
                    <ButtonDesign title="Sign out" onClickHandler={() => {
                        deleteCookie()
                        window.location.href = `https://www.${getUrl()}`
                    }}/>
                </div>
            </div>
        </>
    )
}

export default ProfileIcon