import { useEffect } from 'react'
import BlackOpacityDiv, { closeOpacity, openOpacity } from '../BlackOpacityDiv'
import styles from './index.module.scss'
import $ from 'jquery'

function CompletedPopup(){
    return (
        <>
            <BlackOpacityDiv/>
            <div className={[styles.CompletedPopupContainer, "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"].join(" ")}>
                <img src="/dashboard/images/success-popup.png"/>
                <div className={[styles.Heading, "flex items-center justify-center"].join(" ")}>
                    <p>Success</p>
                    <img src="/dashboard/images/icons/product-card/high-score.svg"/>
                </div>
                <p className={[styles.Description].join(" ")}>You’re Product has been added successfully.</p>
                <button className={styles.Button} onClick={() => closeCompletedPopup()}>Done</button>
            </div>
        </>
    )
}

export default CompletedPopup

export function openCompletedPopup(){
    openOpacity()
    $(`.${styles.CompletedPopupContainer}`).fadeIn(200)
}

export function closeCompletedPopup(){
    closeOpacity()
    $(`.${styles.CompletedPopupContainer}`).fadeOut(200)
}