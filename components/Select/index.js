import { ChevronDownIcon } from "@heroicons/react/outline"
import styles from './index.module.scss'

function Select({label}){
    return (
        <div className={[styles.SelectContainer, "flex items-center justify-between cursor-pointer"].join(" ")}>
            <div className={[styles.Label].join(" ")}>{label}</div>
            <div className={[styles.IconDiv].join(" ")}>
                <img src="/dashboard/images/icons/chevron-down-solid.svg"/>
            </div>
        </div>
    )
}

export default Select