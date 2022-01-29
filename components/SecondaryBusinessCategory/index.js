import { useEffect, useState } from 'react'
import { addSecondaryBusinessType, deleteRow } from '../apis'
import ConfirmPopup from '../ConfirmPopup'
import styles from './index.module.scss'

function SecondaryBusinessCategory({text, active, business_type_id, business_company_id, allowAddCategory, onClick}){

	const [activeType, setActiveTag] = useState(active)
	const [showErrorPopup, setShowErrorPopup] = useState(false)
	async function apiFunction(){
		if(allowAddCategory || activeType){
			if(activeType){
				let updateData = await addSecondaryBusinessType(business_type_id, "delete")
				console.log(updateData)
				if(await updateData.flash == true){
					setActiveTag(!activeType)
					onClick()
				}
			} else{
				let updateData = await addSecondaryBusinessType(business_type_id)
				if(await updateData.flash == true){
					setActiveTag(!activeType)
					onClick()
				}
			}
		} else{
			setShowErrorPopup(true)
		}
	}
	return (
		<>
			<button className={[styles.SecondaryBusinessCategoryButton, activeType ? styles.Active : null, allowAddCategory ? null : styles.Disabled].join(" ")} onClick={() => apiFunction()}>{text}</button>
			{
				showErrorPopup ? (
					<ConfirmPopup title="You can not select more than 2 business types" onClickOk={() => setShowErrorPopup(false)}/>
				) : null
			}
		</>
	)
}

export default SecondaryBusinessCategory