import styles from './index.module.scss'

function ScoreCircle(){
    return (
        <div className={styles.ScoreCircleContainer}>
            <span className={styles.ScoreLeft}>
                <span className={styles.ScoreBar}></span>
            </span>
            <span className={styles.ScoreRight}>
                <span className={styles.ScoreBar}></span>
            </span>
        </div>
    )
}

export default ScoreCircle