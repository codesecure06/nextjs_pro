import styles from './index.module.scss'
import BlackOpacityDiv, { closeOpacity, openOpacity } from '../BlackOpacityDiv'
import $ from 'jquery'
import { useEffect } from 'react'
import InputDesign from '../InputDesign'
import PrimaryButton from '../PrimaryButton'

function UpdateMobilePopup(){
    let inputFieldsIndex = 1
    let inputFields = [
        {
            key: inputFieldsIndex++,
            placeholder: "Old number",
            type: "phoneNumber",
            phoneNumber: true,
            validation: "mobile"
        },
        {
            key: inputFieldsIndex++,
            placeholder: "New number",
            type: "phoneNumber",
            phoneNumber: true,
            validation: "mobile"
        },
        {
            key: inputFieldsIndex++,
            placeholder: "Repeat new number",
            type: "phoneNumber",
            phoneNumber: true,
            validation: "mobile"
        }
    ]
    return (
        <>
            <div className={[styles.OTPPopupContainer, "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"].join(" ")}>
                <img className={styles.Image} src="/dashboard/images/update-mobile-popup.png"/>
                <h3>Update your mobile number</h3>
                <p>Update your Mobile number to recieve notifications</p>
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
                    <PrimaryButton title="cancel" type="secondary" onClick={closeUpdateMobile}/>
                    <PrimaryButton title="save" type="primary"/>
                </div>
                <div className={[styles.CloseDiv, "absolute"].join(" ")}>
                    <img src="/dashboard/images/icons/remove-white.svg" className="cursor-pointer" onClick={closeUpdateMobile}/>
                </div>
            </div>
        </>
    )
}

export default UpdateMobilePopup

export function openUpdateMobile(){
    $(`.${styles.OTPPopupContainer}`).fadeIn(200)
    openOpacity()
}

export function closeUpdateMobile(){
    $(`.${styles.OTPPopupContainer}`).fadeOut(200)
    closeOpacity()
}