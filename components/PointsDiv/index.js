import styles from './index.module.scss'

function PointsDiv({points}){
    return (
        <font className={[styles.PointsDiv, "absolute"].join(" ")}><div></div><span>{points} points</span></font>
    )
}

export default PointsDiv