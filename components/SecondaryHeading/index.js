import styles from './index.module.scss'

function SecondaryHeading({heading}){
    return (
        <p className={styles.Heading}>{heading}</p>
    )
}

export default SecondaryHeading