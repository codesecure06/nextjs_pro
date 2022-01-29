import { SearchIcon } from "@heroicons/react/outline"
import styles from './index.module.scss'

function SearchBar(){
    return (
        <div className={[styles.SearchBar, "items-center bg-gray-100 rounded-full flex"].join(" ")}>
            <img src="/dashboard/images/icons/header/search.svg"/>
            <input className="bg-transparent flex-grow" placeholder="Find Active Seller, Products"/>
        </div>
    )
}

export default SearchBar