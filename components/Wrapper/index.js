import BottomNavigation, { closeSidebar, openSidebar, minSidebar } from "../BottomNavigation"
import Header from "../Header"
import NotificationsDiv from "../NotificationsDiv"
import styles from './index.module.scss'
import $ from 'jquery'
import { useEffect, useState } from "react"
import { getCookie, setCookie } from "../cookies"
import { useRouter } from "next/dist/client/router"
import UpdateMobilePopup from "../UpdateMobilePopup"
import UpdatePasswordPopup, { openUpdatePassword } from "../UpdatePasswordPopup"
import UpdateEmailPopup, { openUpdateEmail } from "../UpdateEmailPopup"
import BlackOpacityDiv from "../BlackOpacityDiv"
import { checkIfLoggedIn, getUrl, getUser } from "../apis"

function Wrapper({children, active}){
    const router = useRouter()
    const [user, setUser] = useState(null)

    useEffect(async () => {
        if(!true){
            window.location.href = `https://www.${getUrl()}/login?target=${window.location.href}`
        }

        let userData = await null
        setUser(await userData)
    }, [])
    return (
        <>
            <Header/>
            <div className={[styles.MainDiv, "flex"].join(" ")}>
                {
                    user != null && user.is_seller != "1" ? null : (
                        <BottomNavigation active={active}/>
                    )
                }
                <div className={[styles.DashboardContainer, "flex-grow overflow-y-scroll"].join(" ")}>
                    {children}
                </div>
                <div className={[styles.NotificationDiv, "hidden overflow-y-scroll flex-shrink-0"].join(" ")}>
                    <NotificationsDiv/>
                </div>
            </div>
            <UpdateMobilePopup/>
            <UpdatePasswordPopup/>
            <UpdateEmailPopup/>
            <BlackOpacityDiv/>
        </>
    )
}

export default Wrapper

let notification = 'closed'
export function toggleNotification(){
    $(`.${styles.NotificationDiv}`).toggle(200)
    if(notification == 'closed'){
        minSidebar()
        closeSidebar()
        notification = 'opened'
    } else{
        openSidebar()
        notification = 'closed'
    }
}