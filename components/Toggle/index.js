import styles from './index.module.scss'
import $ from 'jquery'
import { useState } from 'react'

function Toggle({leftText, rightText}){
    const [toggled, setToggled] = useState(false)
    function toggleSwitch(){
        setToggled(!toggled)
    }
    return (
        <div className={[styles.ToggleContainer, "flex items-center"].join(" ")} onClick={toggleSwitch}>
            <div className={[styles.Label, !toggled ? styles.ActiveLabel : null].join(" ")}>{leftText}</div>
            <div className={[styles.Toggle,  "relative cursor-pointer"].join(" ")}>
                <div className={[styles.ToggleCircle, toggled ? styles.ToggledCircle : null, "absolute flex items-center justify-center"].join(" ")}>
                    <p>{!toggled ? 'B' : 'S'}</p>
                </div>
            </div>
            <div className={[styles.Label, toggled ? styles.ActiveLabel : null].join(" ")}>{rightText}</div>
        </div>
    )
}

export default Toggle

export function minToggle(){
    $(`.${styles.ToggleContainer}`).addClass(`${styles.MinToggleContainer}`)
}

export function maxToggle(){
    $(`.${styles.ToggleContainer}`).removeClass(`${styles.MinToggleContainer}`)
}