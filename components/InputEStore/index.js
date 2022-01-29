import Placeholder from '../Placeholder'
import styles from './index.module.scss'

function InputEStore({placeholder, iconDiv, selectOptions}){
    return (
        <label className={[styles.LabelContainer, selectOptions ? styles.WithSelect : null, "relative flex items-center"].join(" ")}>
            {
                iconDiv ? (
                    <div className={[styles.IconDiv, "flex items-center justify-center"].join(" ")}>
                        {iconDiv}
                    </div>
                ) : null
            }
            <input className={[iconDiv ? null : styles.NoIcon, "flex-grow"].join(" ")} placeholder={placeholder} type="text"/>
            {
                selectOptions ? (
                    <select>
                        {
                            selectOptions.map((item) => {
                                return (
                                    <option value={item.value} key={item.id}>{item.title}</option>
                                )
                            })
                        }
                    </select>
                ) : null
            }
            <Placeholder placeholder={placeholder}/>
        </label>
    )
}

export default InputEStore