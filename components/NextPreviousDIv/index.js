import styles from './index.module.scss';
import Link from 'next/link'

function NextPreviousDiv({showNext, showPrevious, nextLink, previousLink, saveLink, onClickNext, onClickPrev, showSave, onClickSave}){
    return (
        <div className={[styles.NextPreviousContainer, "flex items-center justify-end"].join(" ")}>
            {
                onClickPrev || previousLink ? (
                    onClickPrev ? (
                        <div className={[styles.PreviousDiv, "flex items-center justify-between cursor-pointer"].join(" ")} onClick={onClickPrev}>
                            <img src="/dashboard/images/icons/previous.svg"/>
                            <span>Previous</span>
                        </div>
                    ) : (
                        <Link href={previousLink}>
                            <div className={[styles.PreviousDiv, "flex items-center justify-between cursor-pointer"].join(" ")}>
                                <img src="/dashboard/images/icons/previous.svg"/>
                                <span>Previous</span>
                            </div>
                        </Link>
                    )
                ) : null
            }
            {
                onClickNext || nextLink ? (
                    onClickNext ? (
                        <div className={[styles.NextDiv, "flex items-center justify-between cursor-pointer"].join(" ")} onClick={onClickNext}>
                            <span>Next</span>
                            <img src="/dashboard/images/icons/next.svg"/>
                        </div>
                    ) : (
                        <Link href={nextLink}>
                            <div className={[styles.NextDiv, "flex items-center justify-between cursor-pointer"].join(" ")}>
                                <span>Next</span>
                                <img src="/dashboard/images/icons/next.svg"/>
                            </div>
                        </Link>
                    )
                ) : onClickSave || saveLink ? (
                    onClickSave ? (
                        <div className={[styles.SaveDiv, "flex items-center justify-between cursor-pointer"].join(" ")} onClick={onClickSave}>
                            <span>Save</span>
                            <img src="/dashboard/images/icons/checked.svg"/>
                        </div>
                    ) : (
                        <Link href={saveLink}>
                            <div className={[styles.SaveDiv, "flex items-center justify-between cursor-pointer"].join(" ")}>
                                <span>Save</span>
                                <img src="/dashboard/images/icons/checked.svg"/>
                            </div>
                        </Link>
                    )
                ) : null
            }
        </div>
    )
}

export default NextPreviousDiv