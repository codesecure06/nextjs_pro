import styles from './index.module.scss'
import InputDesign from "../InputDesign"
import { useState } from 'react'

function EStoreAddProductFile({title, points, inputPlaceholder, youtubeVideo}){
    const [youtube, setYoutube] = useState(null)
    return (
        <div className={styles.AddProductFileContainer}>
            <div className={[styles.AddFileHeader, "flex items-center justify-between"].join(" ")}>
                <p>{title}</p>
                <div className={styles.ScoreDiv}>
                    <button>{points}</button>
                </div>
            </div>
            <label className={[styles.LabelContainer, "flex items-center justify-center cursor-pointer overflow-hidden"].join(" ")}>
                {
                    youtubeVideo ? (
                        <iframe src="https://www.youtube.com/embed/rr2XfL_df3o"></iframe>
                    ) : (
                        <>
                            <input type="file"/>
                            <div className={[styles.LabelDiv, "flex items-center justify-center"].join(" ")}>
                                <img src="/dashboard/images/icons/upload-cloud.svg"/>
                                <p>Upload .doc, .pdf file</p>
                            </div>
                        </>
                    )
                }
            </label>
            <div className={styles.InputDiv}>
                <InputDesign placeholder={inputPlaceholder} points="2" SecondaryIcon="secured.svg"/>
            </div>
        </div>
    )
}

export default EStoreAddProductFile