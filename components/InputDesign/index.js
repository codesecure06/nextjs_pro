import { ChevronDownIcon, IdentificationIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"
import { updateInput } from "../apis"
import Placeholder from "../Placeholder"
import PointsDiv from "../PointsDiv"
import { Validate } from "../validations"
import styles from './index.module.scss'
import $ from 'jquery'
import { closeOpacity, openOpacity } from "../BlackOpacityDiv"

function InputDesign({box_id,Icon, placeholder, points, SecondaryIcon, phoneNumber, secured, url, value, validation, selectValue, updateModel, selectModel, type, inputType, hideTopPlaceholder, readOnly, disabled, onBlurFunction, first_last_name, onKeyupFunction, form}){
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [defaulValue, setDefaulValue] = useState(null)
    const [inputSecured, setInputSecured] = useState(null)
    const [showOtpPopup, setShowOtpPopup] = useState(false)
    useEffect(() => {
        setDefaulValue(value)
        setInputSecured(secured)
    }, [value, secured])
    let tempValue = defaulValue
    let tempSecured = inputSecured
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
                if(onBlurFunction){
                    onBlurFunction(input.value)
                }
                if(first_last_name){
                    let name = value.split(" ")
                    let index = 0
                    if(updateModel){
                        updateModel.map((item) => {
                            updateInput(item.model, item.row_id, item.field, name[index++])
                        })
                    }
                } else{
                    if(updateModel){
                        updateModel.map((item) => {
                            updateInput(item.model, item.row_id, item.field, value)
                        })
                    }
                }
            }
        } else{
            if(onBlurFunction){
                onBlurFunction(input.value)
            }
            if(first_last_name){
                let name = value.split(" ")
                let index = 0
                if(updateModel){
                    updateModel.map((item) => {
                        updateInput(item.model, item.row_id, item.field, name[index++])
                    })
                }
            } else{
                if(updateModel){
                    updateModel.map((item) => {
                        updateInput(item.model, item.row_id, item.field, value)
                    })
                }
            }
        }
    }

    function openOTPScreen(){
        setShowOtpPopup(true)
        openOpacity()
    }

    return (
        <>
            {/* {JSON.stringify(defaulValue)} */}
            <label className={[styles.InputDesignContainer, disabled || tempSecured ? styles.SecuredDiv : null, error ? styles.ErrorInput : null, Icon == null ? styles.NoIcon : null, "flex items-center relative cursor-pointer"].join(" ")} onClick={() => tempSecured ? openOTPScreen() : null}>
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
                            <select onChange={(e) => updateInput(selectModel.model, selectModel.row_id, selectModel.field, e.target.value)} defaultValue={selectValue}>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                            </select>
                            <span><img src="/dashboard/images/icons/chevron-down.svg"/></span>
                        </div>
                    ) : null
                }
                <div className={[styles.InputDiv, "flex-grow"].join(" ")}>
                    <input type={inputType ? inputType : "text"} form={form} className="w-full" placeholder={placeholder} maxLength={validation == "mobile" ? 10 : validation == "landline" ? 11 : null} onKeyUp={(e) => {
                        validate(e.target)
                        if(onKeyupFunction){
                            onKeyupFunction(e.target.value)
                        }
                    }} onBlur={updateModel || onBlurFunction ? (e) => apiFunction(e.target) : null} defaultValue={tempValue} readOnly={readOnly} disabled={tempSecured || disabled}/>
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
                    points && (tempValue == '' || tempValue == null) ? (
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
            {
                secured ? (
                    showOtpPopup ? (
                        <OTPPopup closePopup={() => {
                            setShowOtpPopup(false)
                            closeOpacity()
                        }} onOtpVerified={() => setInputSecured(false)}/>
                    ) : null
                ) : null
            }
        </>
    )
}

export default InputDesign