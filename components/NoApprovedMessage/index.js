import styles from './index.module.scss'
import Link from 'next/link'

function NoApprovedMessage({productLink}){
    return (
        <div className={[styles.NoApprovedMessageContainer, "flex items-center justify-center"].join(" ")}>
            <p className="w-3/4 text-center">You can see detailed view of this product after it gets <b>approved</b>. To get this product approved please confirm that all the details are added to product <Link href={productLink}><u><span className="cursor-pointer">here</span></u></Link></p>
        </div>
    )
}

export default NoApprovedMessage