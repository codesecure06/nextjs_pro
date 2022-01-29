import styles from './index.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { getUser } from '../apis'

function BalanceHeader(){

	const [user, setUser] = useState(null)

	useEffect(async () => {
		setUser(await null)
	}, [])
	return (
		<>
			<Link href="/wallet">
				<div>
					<div className={[styles.BalanceHeaderContainer, "flex items-center cursor-pointer justify-between"].join(" ")}>
						<img className={styles.WalletIcon} src="/dashboard/images/icons/header/wallet.svg"/>
						<div className={[styles.BalanceDiv, "flex items-center justify-end flex-grow"].join(" ")}>
							<img className={styles.EIcon} src="/dashboard/images/icons/header/e.svg"/>
							<p>{user != null ? user.wallet_amount || '0' : null}</p>
							{/* <img className={styles.ArrowIcon} src="/dashboard/images/icons/header/chevron-down.svg"/> */}
						</div>
					</div>
					<div className={[styles.ExpireDiv, "flex items-center"].join(" ")}>
						<p>Expires on:</p>
						<span>30 Dec, 2021</span>
					</div>
				</div>
			</Link>
		</>
	)
}

export default BalanceHeader