import styles from './index.module.scss'

function SidebarTitle({title}){
    return (
        <div className={[styles.SidebarTitleContainer, "flex items-center"].join(" ")}>
            <p>{title}</p>
            <div className={[styles.LineDiv, "flex-grow"].join(" ")}></div>
        </div>
    )
}

export default SidebarTitle