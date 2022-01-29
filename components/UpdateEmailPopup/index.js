import styles from './index.module.scss'
import BlackOpacityDiv, { closeOpacity, openOpacity } from '../BlackOpacityDiv'
import $ from 'jquery'
import { useEffect } from 'react'
import InputDesign from '../InputDesign'
import PrimaryButton from '../PrimaryButton'

function UpdateEmailPopup(){
    let inputFieldsIndex = 1
    let inputFields = [
        {
            key: inputFieldsIndex++,
            placeholder: "Email ID",
            validation: "email"
        },
        {
            key: inputFieldsIndex++,
            placeholder: "Confirm Email ID",
            validation: "email"
        }
    ]
    return (
        <>
            <div className={[styles.OTPPopupContainer, "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"].join(" ")}>
                <img className={styles.Image} src="/dashboard/images/update-email-popup.png"/>
                <h3>Update your email address</h3>
                <p className={styles.Description}>We’ll use this email to help you sign in if you forget your password.</p>
                {
                    inputFields.map((item) => {
                        return (
                            <div key={item.key} className={styles.InputDiv}>
                                <InputDesign {...item}/>
                            </div>
                        )
                    })
                }
                <div className={styles.ButtonDiv}>
                    <PrimaryButton title="cancel" type="secondary" onClick={closeUpdateEmail}/>
                    <PrimaryButton title="save" type="primary"/>
                </div>
                <div className={[styles.CloseDiv, "absolute"].join(" ")}>
                    <img src="/dashboard/images/icons/remove-white.svg" className="cursor-pointer" onClick={closeUpdateEmail}/>
                </div>
            </div>
        </>
    )
}

export default UpdateEmailPopup

export function openUpdateEmail(){
    $(`.${styles.OTPPopupContainer}`).fadeIn(200)
    openOpacity()
}

export function closeUpdateEmail(){
    $(`.${styles.OTPPopupContainer}`).fadeOut(200)
    closeOpacity()
}