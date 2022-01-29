import { BellIcon } from "@heroicons/react/outline"
import styles from './index.module.scss'

function Notification(){
    return (
        <div className={[styles.NotificationContainer, "cursor-pointer relative"].join(" ")}>
            <img src="/dashboard/images/icons/header/bell.svg"/>
            {/* <span className={[styles.Circle, "absolute w-2 h-2 bg-secondary top-2 right-2 rounded-full"].join(" ")}></span> */}
        </div>
    )
}

export default Notification