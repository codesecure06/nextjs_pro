import styles from './index.module.scss'
import $ from 'jquery'
import { useState } from 'react'

function RemoveButton({text, onConfirmed}){
    const [confirmActive, setConfirmActive] = useState(false)
    function confirm(){
        setConfirmActive(!confirmActive)
    }
    return (
        <div className={[styles.RemoveButton, confirmActive ? styles.RemoveActive : null,"flex items-center justify-between cursor-pointer"].join(" ")} onClick={() => !confirmActive ? confirm() : null}>
            {
                !confirmActive ? (
                    <p className={styles.Text}>Remove {text}</p>
                ) : (
                    <p className={styles.ConfirmText}>Are you sure?</p>
                )
            }
            {
                !confirmActive ? (
                    <img className={styles.RemoveIcon} src="/dashboard/images/icons/remove-red.svg"/>
                ) : (
                    <div className={[styles.ConfirmDiv, "flex items-center justify-between flex-grow"].join(" ")}>
                        <img src="/dashboard/images/icons/checked-red.svg" onClick={onConfirmed}/>
                        <img src="/dashboard/images/icons/remove-green.svg" onClick={confirm}/>
                    </div>
                )
            }
        </div>
    )
}

export default RemoveButton