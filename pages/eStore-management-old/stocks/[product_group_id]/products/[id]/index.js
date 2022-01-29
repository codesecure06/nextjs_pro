import EStoreHeader from "../../../../../../components/EStoreHeader"
// import EStoreProductGroups from "../../../../../../components/EStoreProductGroups"
// import EStoreProducts from "../../../../../../components/EStoreProducts"
// import EStoreSingleProduct from "../../../../../../components/EStoreSingleProduct"
// import EStoreSingleStock from "../../../../../../components/EStoreSingleStock"
// import SelectEStore from "../../../../../../components/SelectEStore"
import Wrapper from "../../../../../../components/Wrapper"
import styles from './index.module.scss'

function EStoreSingleStockId(){
    return (
        <Wrapper active="eStore Management">
            <EStoreHeader active="stocks" activeTab="All"/>
            <div className={[styles.MainDiv, "relative flex w-full"].join(" ")}>
                {/* <div className={[styles.ProductsGroupsDiv, "flex-shrink-0"].join(" ")}>
                    <div className={styles.ProductGroups}>
                        <EStoreProductGroups activeGroup="1" activeProduct="2"/>
                    </div>
                </div>
                <div className={[styles.ProductsDiv, "flex-grow"].join(" ")}>
                    <EStoreSingleStock active="stocks"/>
                </div> */}
            </div>
        </Wrapper>
    )
}

export default EStoreSingleStockId