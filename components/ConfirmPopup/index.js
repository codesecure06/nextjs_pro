import styles from './index.module.scss'

function ConfirmPopup({title, onClickNo, onClickYes, onClickOk}){
    return (
        <div className={[styles.ConfirmPopupContainer, "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"].join(" ")}>
            <div>
                <h2>{title}</h2>
                <div className={[styles.ActionButtons, "flex items-center justify-evenly"].join(" ")}>
                    {
                        onClickOk ? (
                            <button onClick={onClickOk}>Ok</button>
                        ) : (
                            <>
                                <button onClick={onClickNo}>No</button>
                                <button onClick={onClickYes}>Yes</button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ConfirmPopup