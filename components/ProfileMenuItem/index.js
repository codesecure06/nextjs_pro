import styles from './index.module.scss'
import Link from 'next/link'

function ProfileMenuItem({Icon, title, link}){
    return (
        <Link href={`${link}`}>
            <div className={[styles.ProfileMenuItemContainer, "flex items-center hover:bg-gray-100 cursor-pointer"].join(" ")}>
                <div className={styles.IconDiv}>
                    <img src={`${Icon}`}/>
                </div>
                <p className={[styles.TitleDiv, "ml-4 text-sm"].join(" ")}>{title}</p>
            </div>
        </Link>
    )
}

export default ProfileMenuItem