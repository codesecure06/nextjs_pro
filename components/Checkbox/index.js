import { useEffect, useState } from 'react'
import { updateInput } from '../apis'
import styles from './index.module.scss'
import $ from 'jquery'

function Checkbox({check, id, updateModel, disabled, onClick, checkFor}){
    const [checked, setChecked] = useState(check)
    useEffect(() => {
        setChecked(check)
    }, [check])
    
    function toggleCheckbox(element){
        if(!disabled || $(element).is(":checked") != checkFor){
            setChecked($(element).is(":checked"))
            updateModel.map((item) => {
                updateInput(item.model, item.row_id, item.field, $(element).is(":checked") ? "1" : "0")
            })
        }
    }
    return (
        <label onClick={onClick} className={[styles.CheckboxContainer, checked ? styles.Checked : null, "flex items-center justify-center cursor-pointer"].join(" ")}>
            <img src="/dashboard/images/icons/checked.svg"/>
            <input type="checkbox" defaultChecked={checked} id={id} onChange={(e) => toggleCheckbox(e.target)}/>
        </label>
    )
}

export default Checkbox