import styles from './index.module.scss'

function BottomNavigationItem({Icon, active}){
    return (
        <div className={[styles.BottomNavigationItemContainer, "rounded-2xl hover:bg-gray-200 flex items-center justify-center"].join(" ")}>
            <Icon className={active ? 'w-8 h-8 text-primary' : 'w-6 h-6 text-gray-500'}/>
        </div>
    )
}

export default BottomNavigationItem