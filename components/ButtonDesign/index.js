import styles from './index.module.scss'

function ButtonDesign({title, onClickHandler}){
    return (
        <button className={[styles.Button, "w-full"].join(" ")} onClick={onClickHandler}>{title}</button>
    )
}

export default ButtonDesign