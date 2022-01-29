import styles from './index.module.scss'

function PrimaryButton({title, type, onClick, buttonType, form}){
    let typeClass = styles.PrimaryButton
    switch(buttonType){
        case 'primary':
            typeClass = styles.PrimaryButton
        break
        case 'secondary':
            typeClass = styles.SecondaryButton
    }
    return (
        <button type={type} form={form} className={[styles.PrimaryButtonContainer, typeClass].join(" ")} onClick={onClick}>{title}</button>
    )
}

export default PrimaryButton