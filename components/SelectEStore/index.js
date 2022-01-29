import styles from './index.module.scss'

function SelectEStore({onChange, searchTags}){
    return (
        <div className={[styles.SelectEStoreContainer, "flex items-center justify-between cursor-pointer"].join(" ")} onClick={onChange}>
            <p>{searchTags ? 'Search Tags' : 'Product Groups'}</p>
            <img src="/dashboard/images/icons/chevron-down-blue.svg"/>
        </div>
    )
}

export default SelectEStore