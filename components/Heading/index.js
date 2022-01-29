import styles from './index.module.scss'

function Heading({heading}){
    return (
        <h2 className={[styles.Heading].join(" ")}>{heading}</h2>
    )
}

export default Heading