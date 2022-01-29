import { ChevronDownIcon, IdentificationIcon } from "@heroicons/react/outline"
import Placeholder from "../Placeholder"
import PointsDiv from "../PointsDiv"
import styles from './index.module.scss'

function InputFileDesign({ Icon, placeholder, points, SecondaryIcon, phoneNumber, secured, url, widthIcon, value, onChangeFunction }) {
    return (
        <label className={[styles.InputDesignContainer, secured ? styles.SecuredDiv : null, "flex items-center relative cursor-pointer"].join(" ")}>
            {
                Icon != null ? (
                    <div className={[styles.IconDiv, "flex-shrink-0"].join(" ")}>
                        <img src={`/dashboard/images/icons/${Icon}`} style={{ width: widthIcon ? widthIcon : null }} />
                    </div>
                ) : null
            }
            <div className={styles.UrlDiv}>
                <p>{url}</p>
            </div>
            {
                phoneNumber ? (
                    <div className={[styles.PhoneNumberDiv, "flex items-center"].join(" ")}>
                        <span className="text-xs font-semibold text-gray-500">+91</span>
                        <span><ChevronDownIcon className="w-4 h-4 text-gray-500" /></span>
                    </div>
                ) : null
            }
            <div className={[styles.InputDiv, Icon == null ? styles.NoIcon : null, "flex-grow"].join(" ")}>
                <input type="file" className="w-full hidden" placeholder={placeholder} defaultValue={value}
                    onChange={(e) => {
                        if (onChangeFunction != null) {
                            onChangeFunction(e)
                        }
                    }}
                />
            </div>
            {
                SecondaryIcon ? (
                    <div className={[styles.SecondIconDiv, "flex-shrink-0"].join(" ")}>
                        <img src={`/dashboard/images/icons/${SecondaryIcon}`} />
                    </div>
                ) : null
            }
            <Placeholder placeholder={placeholder} />
            <PointsDiv points={points} />
        </label>
    )
}

export default InputFileDesign