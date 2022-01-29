import { ChevronDownIcon } from '@heroicons/react/outline'
import $ from 'jquery'
import { useEffect, useState } from 'react'
import { changeCity, updateInput } from '../apis'
import Placeholder from '../Placeholder'
import PointsDiv from '../PointsDiv'
import styles from './index.module.scss'

function InputSelectDesign({Icon, placeholder, points, options, id, active, updateModel, callFunction, form}){

	const [selected, setSelected] = useState(null)
	const [selectOptions, setSelectOptions] = useState(options)
	const [showDropdown, setShowDropdown] = useState(false)

	useEffect(() => {
		setSelected(active)
		setSelectOptions(options)
	}, [active, options])
	let selectedValue = selected
	// console.log(selectedValue)
	// alert(selectedValue.name)

	function toggleDropdown(){
		let dropdown = $(`.${id}-dropdown`)
		let opacityDiv = $(`.${id}-opacity`)
		dropdown.toggleClass("hidden")
		opacityDiv.toggleClass("hidden")
		setShowDropdown(!showDropdown)
	}
	function apiFunction(value){
		$(`.${styles.SearchBar} input`).val("")
		setSelectOptions(options)
		setSelected(value)
		if(updateModel){
			updateModel.map((item) => {
				updateInput(item.model, item.row_id, item.field, value.row_id)
			})
		}
		if(callFunction){
			callFunction(value.row_id)
		}
		toggleDropdown()
	}
	function filterArray(input, array){
		let filteredArray = input.value != '' ? array.filter((item) => {
			return item.name.toLowerCase().includes(input.value)
		}) : options
		setSelectOptions(filteredArray)
	}
	function submitForm(e){
		e.preventDefault()
		if(selectOptions.length == 1){
			apiFunction(selectOptions[0])
		}
	}
	return (
		<>
			<div className={[styles.InputSelectDesignContainer, "flex items-center relative"].join(" ")}>
				{
					Icon != null ? (
						<div className={[styles.IconDiv].join(" ")}>
							<img src={`/dashboard/images/icons/${Icon}`}/>
						</div>
					) : null
				}
				<div className={[styles.InputDiv, Icon == null ? styles.NoIcon : null, "flex-grow cursor-pointer"].join(" ")} onClick={toggleDropdown}>
					{
						showDropdown ? (
							<form id={form} className="flex-grow" onSubmit={(e) => submitForm(e)} onClick={(e) => e.stopPropagation()}>
								<input form={form} className="w-full" type="text" placeholder="search" onKeyUp={(e) => filterArray(e.target, options)} autoFocus={true}/>
							</form>
						) : (
							<input type="text" className="w-full cursor-pointer" placeholder={placeholder} readOnly={true} defaultValue={selectedValue != null ? selectedValue.name : null}/>
						)
					}
				</div>
				<div className={[styles.SecondIconDiv].join(" ")} onClick={toggleDropdown}>
					<ChevronDownIcon className="w-4 h-4"/>
				</div>
				<Placeholder placeholder={placeholder}/>
				{
					points && !selected ? (
						<PointsDiv points={points}/>
					) : null
				}
				<div className={[styles.OptionsDiv, `${id}-dropdown hidden absolute top-full left-0 w-full bg-white overflow-y-auto`].join(" ")}>
					{/* <div className={[styles.SearchBarDiv, "sticky top-0"].join(" ")}>
						<div className={[styles.SearchBar, "flex items-center"].join(" ")}>
							<img src="/dashboard/images/icons/search-secondary.svg"/>
							<form className="flex-grow" onSubmit={(e) => submitForm(e)}>
								<input className="w-full" type="text" placeholder="search" onKeyUp={(e) => filterArray(e.target, options)}/>
							</form>
						</div>
					</div> */}
					<div className="relative h-full overflow-y-auto">
						{/* <div className={[styles.FadedDiv, "sticky top-0 left-0 w-full bg-gradient-to-b from-white to-transparent"].join(" ")}></div> */}
						<div className="flex flex-wrap">
							{
								selectOptions ? selectOptions.map((item, key) => {
									return (
										<div key={key} className={[styles.Option, selected && selected.row_id == item.row_id ? styles.ActiveOption : null, `flex items-center justify-center cursor-pointer ${selected && selected.row_id == item.row_id ? 'order-1' : 'order-2'}`].join(" ")} onClick={() => apiFunction(item)}>
											<p>{item.name}</p>
										</div>
									)
								}) : null
							}
						</div>
						{/* <div className={[styles.FadedDiv, "sticky bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent"].join(" ")}></div> */}
					</div>
				</div>
			</div>
			<div className={`${id}-opacity hidden fixed top-0 left-0 w-full h-full z-40`} onClick={toggleDropdown}></div>
		</>
	)
}

export default InputSelectDesign