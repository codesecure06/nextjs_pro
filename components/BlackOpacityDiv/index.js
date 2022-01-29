import styles from './index.module.scss'
import $ from 'jquery'

function BlackOpacityDiv(){
    return (
        <div className={[styles.BlackOpacityDivContainer, "fixed w-full h-full top-0 left-0"].join(" ")}></div>
    )
}

export default BlackOpacityDiv

export function openOpacity(){
    $(`.${styles.BlackOpacityDivContainer}`).fadeIn(200)
}

export function closeOpacity(){
    $(`.${styles.BlackOpacityDivContainer}`).fadeOut(200)
}