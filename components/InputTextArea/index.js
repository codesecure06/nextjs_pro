import { ChevronDownIcon, IdentificationIcon } from "@heroicons/react/outline"
import { useState } from "react"
import { updateInput } from "../apis"
import Placeholder from "../Placeholder"
import PointsDiv from "../PointsDiv"
import { Validate } from "../validations"
import styles from './index.module.scss'

function InputTextareaDesign({Icon, placeholder, points, SecondaryIcon, phoneNumber, secured, url, value, validation, updateModel, type, hideTopPlaceholder}){
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    function validate(input){
        var value = input.value
        if(validation){
            let valid = Validate(value, validation)
            if(valid != true){
                setError(true)
                setErrorMessage(valid)
            } else{
                setError(false)
                setErrorMessage(valid)
            }
        }
    }
    function apiFunction(input){
        var value = input.value
        if(validation){
            setError(!Validate(value, validation))
            if(error == false){
                updateModel.map((item) => {
                    updateInput(item.model, item.row_id, item.field, value)
                })
            }
        } else{
            updateModel.map((item) => {
                updateInput(item.model, item.row_id, item.field, value)
            })
        }
    }
    return (
        <label className={[styles.InputDesignContainer, secured ? styles.SecuredDiv : null, error ? styles.ErrorInput : null, "flex relative"].join(" ")}>
            {
                Icon != null ? (
                    <div className={[styles.IconDiv, "flex-shrink-0 flex items-center justify-center"].join(" ")}>
                        <img src={`/dashboard/images/icons/${Icon}`}/>
                    </div>
                ) : null
            }
            {
                url ? (
                    <div className={styles.UrlDiv}>
                        <p>{url}</p>
                    </div>
                ) : null
            }
            {
                phoneNumber ? (
                    <div className={[styles.PhoneNumberDiv, "flex items-center"].join(" ")}>
                        <select>
                            <option>+91</option>
                        </select>
                        <span><img src="/dashboard/images/icons/chevron-down.svg"/></span>
                    </div>
                ) : type == "personName" ? (
                    <div className={[styles.PhoneNumberDiv, "flex items-center"].join(" ")}>
                        <select>
                            <option>Mr.</option>
                            <option>Mrs.</option>
                        </select>
                        <span><img src="/dashboard/images/icons/chevron-down.svg"/></span>
                    </div>
                ) : null
            }
            <div className={[styles.InputDiv, Icon == null ? styles.NoIcon : null, "flex-grow"].join(" ")}>
                <textarea type="text" className="w-full" placeholder={placeholder} maxLength={phoneNumber ? 10 : null} onKeyUp={(e) => validate(e.target)} onBlur={(e) => apiFunction(e.target)}>{value}</textarea>
            </div>
            {
                SecondaryIcon ? (
                    <div className={[styles.SecondIconDiv, "flex-shrink-0"].join(" ")}>
                        <img src={`/dashboard/images/icons/${SecondaryIcon}`}/>
                    </div>
                ) : null
            }
            {
                hideTopPlaceholder ? null : (
                    <Placeholder placeholder={placeholder}/>
                )
            }
            {
                points ? (
                    <PointsDiv points={points}/>
                ) : null
            }
            {
                error ? (
                    <div className={[styles.ErrorDiv, "absolute top-full left-0 flex"].join(" ")}>
                        <img src="/dashboard/images/icons/error-red.svg"/>
                        <p>{errorMessage}</p>
                    </div>
                ) : null
            }
        </label>
    )
}

export default InputTextareaDesign