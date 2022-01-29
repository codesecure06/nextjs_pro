import EStoreHeader from "../../../../../../components/EStoreHeader"
// import EStoreProductGroups from "../../../../../../components/EStoreProductGroups"
// import EStoreProducts from "../../../../../../components/EStoreProducts"
// import EStoreSingleProduct from "../../../../../../components/EStoreSingleProduct"
// import SelectEStore from "../../../../../../components/SelectEStore"
import Wrapper from "../../../../../../components/Wrapper"
import styles from './index.module.scss'

function EStoreSingleProductId(){
    return (
        <Wrapper active="eStore Management">
            <EStoreHeader active="services" activeTab="All"/>
            <div className={[styles.MainDiv, "relative flex w-full"].join(" ")}>
                {/* <div className={[styles.ProductsGroupsDiv, "flex-shrink-0"].join(" ")}>
                    <div className={[styles.ProductGroups, "sticky"].join(" ")}>
                        <EStoreProductGroups active="services"/>
                    </div>
                </div>
                <div className={[styles.ProductsDiv, "flex-grow"].join(" ")}>
                    <EStoreSingleProduct active="services"/>
                </div> */}
            </div>
        </Wrapper>
    )
}

export default EStoreSingleProductId