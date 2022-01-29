import styles from './index.module.scss'
import $ from 'jquery'
import InputDesign from '../InputDesign'
import BlackOpacityDiv, { closeOpacity, openOpacity } from '../BlackOpacityDiv'
import { useEffect, useState } from 'react'
import { readIMG, uploadFile } from '../apis'
import { useRouter } from 'next/dist/client/router'

function StatutaryProfilePopup({showPan, showTan, showCin, showDgft, row_id}){

    const [inputField, setInputField] = useState(null)
    const [field, setField] = useState(null)
    const [placeholder, setPlaceholder] = useState(null)
    const router = useRouter()
    function closePopup(){
        $(`.${styles.StatutaryProfilePopupContainer}`).removeClass(`${styles.OpenedPopup}`)
        closeOpacity()
    }
    useEffect(() => {
        setInputField("pan_number")
        setField("pan_file")
        setPlaceholder("PAN Number")
        if(!showPan){
            setInputField("tan_number")
            setField("tan_file")
            setPlaceholder("TAN Number")
        }
        if(!showTan){
            setInputField("cin_number")
            setField("cin_file")
            setPlaceholder("CIN Number")
        }
        if(!showCin){
            setInputField("dgft_ie_code")
            setField("dgft_ie_code_file")
            setPlaceholder("DGFT Number")
        }
    }, [showPan, showTan, showCin, showDgft])
    return (
        <>
            <div className={[styles.StatutaryProfilePopupContainer, "fixed top-1/2 transform -translate-x-1/2 -translate-y-1/2"].join(" ")}>
                <div className={[styles.Header, "flex items-center justify-between"].join(" ")}>
                    <p>What would you like to add?</p>
                    <div className={[styles.RemoveDiv, "cursor-pointer"].join(" ")} onClick={closePopup}>
                        <img src="/dashboard/images/icons/remove-square.svg"/>
                    </div>
                </div>
                <div className={[styles.Options, "flex items-center"].join(" ")}>
                    {
                        showPan ? (
                            <button onClick={() => {
                                setInputField("pan_number")
                                setField("pan_file")
                                setPlaceholder("PAN Number")
                            }} className={field == "pan_file" ? styles.ActiveOption : null}>PAN Card</button>
                        ) : null
                    }
                    {
                        showTan ? (
                            <button onClick={() => {
                                setInputField("tan_number")
                                setField("tan_file")
                                setPlaceholder("TAN Number")
                            }} className={field == "tan_file" ? styles.ActiveOption : null}>TAN Card</button>
                        ) : null
                    }
                    {
                        showCin ? (
                            <button onClick={() => {
                                setInputField("cin_number")
                                setField("cin_file")
                                setPlaceholder("CIN Number")
                            }} className={field == "cin_file" ? styles.ActiveOption : null}>CIN Card</button>
                        ) : null
                    }
                    {
                        showDgft ? (
                            <button onClick={() => {
                                setInputField("dgft_ie_code")
                                setField("dgft_ie_code_file")
                                setPlaceholder("DGFT Number")
                            }} className={field == "dgft_ie_code_file" ? styles.ActiveOption : null}>DGFT Card</button>
                        ) : null
                    }
                </div>
                <div className={styles.FormDiv}>
                    <InputDesign placeholder={placeholder} updateModel={[{model: 'CompaniesSeller', row_id: row_id, field: inputField}]}/>
                    <div className={styles.Label}>Upload file</div>
                    <label id="add-statutory-profile" className={[styles.UploadDiv, "flex items-center justify-center cursor-pointer"].join(" ")}>
                        <input type="file" onChange={(e) => {
                            readIMG(e.target, "add-statutory-profile")
                            uploadFile("CompaniesSeller", row_id, field, e.target.files[0])
                        }}/>
                        <div className={[styles.LabelDiv, "text-center"].join(" ")}>
                            <div className="flex items-center justify-center">
                                <img src="/dashboard/images/icons/upload-cloud.svg"/>
                            </div>
                            <div className={styles.InnerLabelDiv}>
                                <p>Drop you file here</p>
                                <p>.jpg, .jpeg, .png, .pdf, .mp3 and .mp4 format only</p>
                            </div>
                        </div>
                    </label>
                    <div className={[styles.SubmitDiv, "flex items-center justify-end"].join(" ")}>
                        <button onClick={() => router.reload()}>Done</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatutaryProfilePopup

export function openPopup(){
    $(`.${styles.StatutaryProfilePopupContainer}`).addClass(`${styles.OpenedPopup}`)
    openOpacity()
}