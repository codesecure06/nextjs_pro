import styles from './index.module.scss'

function Placeholder({placeholder}){
    return (
        <font className={[styles.Placeholder, "absolute"].join(" ")}><div></div><span>{placeholder}</span></font>
    )
}

export default Placeholder