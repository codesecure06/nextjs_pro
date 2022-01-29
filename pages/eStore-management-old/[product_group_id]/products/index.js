import EStoreHeader from "../../../../components/EStoreHeader"
import EStoreProductGroups from "../../../../components/EStoreProductGroups"
import EStoreProducts from "../../../../components/EStoreProducts"
import SelectEStore from "../../../../components/SelectEStore"
import Wrapper from "../../../../components/Wrapper"
import styles from './index.module.scss'

function EStoreManagementProductGroups({active}){
    return (
        <Wrapper active="eStore Management">
            <EStoreHeader active={active ? active : 'products'} activeTab="All"/>
            <div className={[styles.MainDiv, "relative flex w-full"].join(" ")}>
                <div className={[styles.ProductsGroupsDiv, "flex-shrink-0"].join(" ")}>
                    <div className={[styles.ProductGroups, "sticky"].join(" ")}>
                        <EStoreProductGroups active={active} activeGroup="1" activeProduct="2"/>
                    </div>
                </div>
                <div className={[styles.ProductsDiv, "flex-grow"].join(" ")}>
                    <EStoreProducts active={active ? active : 'products'}/>
                </div>
            </div>
        </Wrapper>
    )
}

export default EStoreManagementProductGroups