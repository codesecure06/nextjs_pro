import styles from './index.module.scss'
import $ from 'jquery'
import { getCookie } from '../cookies'

function SidebarItem({Icon, title, active, iconSize, notification}){
    let sidebar = getCookie("sidebar")
    let sidebarItemClass, titleClass, sidebarItemClass2
    switch(sidebar){
        case "minimized":
            sidebarItemClass = styles.MinSidebarItem
            sidebarItemClass2 = 'justify-center'
            titleClass = 'hidden'
        break
        default: sidebarItemClass = null
    }
    return (
        <div className={[styles.SidebarItemContainer, active ? styles.Active : null, sidebarItemClass, sidebarItemClass2, `flex items-center w-full cursor-pointer relative`].join(" ")}>
            <div className={[styles.IconDiv, "flex items-center justify-center"].join(" ")}>
                <img src={`/dashboard/images/icons/${Icon}`}/>
            </div>
            <div className={[styles.Title, active ? styles.TitleActive : null, titleClass].join(" ")}>{title}</div>
            {
                notification ? (
                    <img className={[styles.NotificationDot, "absolute"].join(" ")} src="/dashboard/images/icons/dashboard/notification-dot.svg"/>
                ) : null
            }
        </div>
    )
}

export default SidebarItem

export function minSidebarItem(){
    $(`.${styles.SidebarItemContainer}`).addClass("justify-center")
    $(`.${styles.SidebarItemContainer}`).addClass(`${styles.MinSidebarItem}`)
    $(`.${styles.Title}`).hide(200)
}
export function openSidebarItem(){
    $(`.${styles.SidebarItemContainer}`).removeClass("justify-center")
    $(`.${styles.SidebarItemContainer}`).removeClass(`${styles.MinSidebarItem}`)
    $(`.${styles.Title}`).show(200)
}