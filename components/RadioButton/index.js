import { useState } from 'react'
import styles from './index.module.scss'

function RadioButton({name, checked, onChecked}){
    const [isChecked, setIsChecked] = useState(checked)
    return (
        <label className={[styles.LabelContainer, "flex items-center justify-center"].join(" ")}>
            <input type="radio" name={name} onChange={() => {
                setIsChecked(!isChecked)
                onChecked()
            }} defaultChecked={checked}/>
            <div className={styles.CheckedCircle}></div>
        </label>
    )
}

export default RadioButton