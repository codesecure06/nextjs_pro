import styles from './index.module.scss'
import { toggleNotification } from '../Wrapper'

function NotificationsDiv(){
	return (
		<div className={styles.NotificationsDivContainer}>
			<div className={[styles.NotificationsDivHeader, "flex items-center justify-between"].join(" ")}>
				<div className={styles.Heading}>Notifications</div>
				<div className={[styles.HideNotificationsDiv, "cursor-pointer"].join(" ")} onClick={toggleNotification}>
					<img src="/dashboard/images/icons/notifications/chevron-right-blue.svg"/>
				</div>
			</div>
			<p className={styles.NoNewNotifications}>No new notifications</p>
			{/* <div className={styles.Notifications}>
				<div className={styles.Notification}>
					<div className={[styles.NotificationHeader, "flex items-center justify-between"].join(" ")}>
						<button>Delivered</button>
						<div>
							<img src="/dashboard/images/icons/remove-grey.svg"/>
						</div>
					</div>
					<div className={styles.NotificationDiv}>
						<h2>Your order</h2>
						<p>Delivered: Your package with 3Lbs, Single Origin Unrosted Grill, Specialty Grade From SIngle Nicaraguan Estate, Direct Trade was Delivered. The package is on it’s way please keep the total amount with change. We hope you enjoyes shopping with us. Thank you.</p>
					</div>
					<div className={styles.DateDiv}>
						<p>Today 10.30PM</p>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default NotificationsDiv