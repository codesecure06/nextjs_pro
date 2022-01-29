import styles from './index.module.scss'

function EStoreTab({title, score, active}){
    return (
        <div className={[styles.EStoreTabContainer, active ? styles.Active : null, "relative"].join(" ")}>
            <div className={styles.Title}>{title}</div>
            <div className={[styles.ScoreDiv, "absolute"].join(" ")}>
                <span className={styles.Score}>{score}</span>
                <span className={styles.Total}>/40</span>
            </div>
        </div>
    )
}

export default EStoreTab