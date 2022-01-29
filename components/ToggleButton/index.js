import styles from './index.module.scss'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { updateInput } from '../apis'

function ToggleSwitch({defaultActive, updateModel}){

    const [active, setActive] = useState(defaultActive)
    useEffect(() => {
        setActive(defaultActive)
    }, [defaultActive])
    
    function toggleCheckbox(element){
        setActive($(element).is(":checked"))
        updateModel.map((item) => {
            updateInput(item.model, item.row_id, item.field, $(element).is(":checked") ? "1" : "0")
        })
        updateInput(updateModel.model, updateModel.row_id, updateModel.field, $(element).is(":checked") ? "1" : "0")
    }
    return (
        <label className={styles.ToggleContainer}>
            <input type="checkbox" onChange={(e) => toggleCheckbox(e.target)} defaultChecked={active}/>
            <div className={[styles.ToggleContainerDiv, "relative block cursor-pointer"].join(" ")}>
                <div className={[styles.Circle, "absolute"].join(" ")}></div>
            </div>
        </label>
    )
}

export default ToggleSwitch