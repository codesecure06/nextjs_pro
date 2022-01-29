import { readIMG, ShowPdf, uploadFile } from '../apis'
import InputDesign from '../InputDesign'
import ToggleSwitch from '../ToggleButton'
import styles from './index.module.scss'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js'

function StatutaryProfileTab({row_id, title, field, inputField, visible, input, value, image, verified, disabled}){
    let array = [
        row_id, 
        title, 
        field, 
        inputField, 
        visible, 
        input, 
        value, 
        image, 
        verified
    ]
    return (
        <div className={styles.StatutaryProfileContainer}>
            <div className="flex items-center justify-between">
                <div className={styles.Heading}>{title}</div>
                <div className={[styles.ToggleDiv, "flex items-center justify-end"].join(" ")}>
                    <p>Visible to buyers</p>
                    <ToggleSwitch defaultActive={visible == "1"} updateModel={[{model: "CompaniesSeller", row_id: row_id, field: `${field}_visible_to_buyer`}]}/>
                </div>
            </div>
            <label id={`upload-file-statutory-${field}`} className={[styles.UploadDiv, "flex items-center justify-center cursor-pointer relative overflow-hidden"].join(" ")} style={{backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
                <input type="file" className="hidden" onChange={(e) => {
                    readIMG(e.target, `upload-file-statutory-${field}`)
                    uploadFile("CompaniesSeller", row_id, `${field}_file`, e.target.files[0])
                }}/>
                {
                    image ? (
                        image.includes(".pdf") ? (
                            <ShowPdf link={image}/>
                        ) : null
                    ) : (
                        <div className="flex items-center justify-center">
                            <img src="/dashboard/images/icons/upload-cloud.svg"/>
                            <p>Upload image</p>
                        </div>
                    )
                }
                <img src="/dashboard/images/icons/camera.svg" className={[styles.CameraIcon, "absolute"].join(" ")}/>
            </label>
            <div className={styles.InputDiv}>
                <InputDesign placeholder={input} disabled={disabled} value={value} secured={false} points="2" SecondaryIcon={verified == "1" ? "secured.svg" :"not-secured.svg"} updateModel={[{model: "CompaniesSeller", row_id: row_id, field: inputField}]}/>
            </div>
        </div>
    )
}

export default StatutaryProfileTab