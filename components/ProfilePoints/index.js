import styles from './index.module.scss'

function ProfilePoints({points}){
    return (
        <div className={[styles.ProfilePointsContainer, "flex items-center justify-center"].join(" ")}>
            <span className={styles.Heading}>Profile Points :&nbsp;</span>
            <span className={styles.Score}>{points}</span>
        </div>
    )
}

export default ProfilePoints