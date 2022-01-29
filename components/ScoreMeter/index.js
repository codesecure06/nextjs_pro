import styles from './index.module.scss'

function ScoreMeter({score}){
    return (
        <>
            <div className={[styles.Score, "flex items-center justify-center"].join(" ")}>
                <font>Score |</font><font>Excellent</font>
            </div>
            <div className={[styles.MeterContainer, "rounded-tl-full rounded-tr-full relative overflow-hidden"].join(" ")}>
                <div className={[styles.MeterInner, "absolute bottom-0 rounded-tl-full rounded-tr-full flex items-center justify-center"].join(" ")}>
                    <div>
                        <p>Score</p>
                        <h2>128</h2>
                    </div>
                </div>
                <div className={[styles.Meter, "absolute left-0 top-0 rounded-full flex items-end justify-start"].join(" ")} style={{transform: 'rotate('+(45+(score*1.8))+'deg)'}}>
                    <div className={styles.MeterCircle}></div>
                </div>
            </div>
            <div className={[styles.ValuesDiv, "flex items-center justify-between"].join(" ")}>
                <p>0</p>
                <p>200</p>
            </div>
        </>
    )
}

export default ScoreMeter