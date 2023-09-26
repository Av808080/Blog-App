import { FC } from 'react'
import styles from './notification.module.scss'
import { Status } from '@/Types/Type'

type NotificationProps = {
    title: string
    message: string
    status: Status
}

const Notification: FC<NotificationProps> = ({ status, title, message }) => {
    return (
        <div className={`${status === 'Pending' ? styles.Pending
            : (status === 'Error' ? styles.Error : styles.Succuss)} 
         ${styles.container}`}>
            <p className={styles.title}> {title}</p>
            <p className={styles.message}>{message}</p>
        </div>
    )
}

export default Notification
