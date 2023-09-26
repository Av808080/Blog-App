import React, { useRef, FormEvent, useState } from 'react'
import styles from './contact.module.scss'
import Notification from '../UI/Notification'
import { Status } from '@/Types/Type'
import Head from 'next/head'
type Notification = {
    title: string
    message: string
    status: Status
}
const Contact = () => {
    const emailInput = useRef<HTMLInputElement>(null)
    const nameInput = useRef<HTMLInputElement>(null)
    const messageInput = useRef<HTMLTextAreaElement>(null)
    const [notification, setNotification] = useState<Notification>({
        title: '',
        message: '',
        status: ''
    })
    const [errorField, setErrorField] = useState<'message' | 'name' | 'email' | ''>('')
    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()
        const name = nameInput.current?.value
        const email = emailInput.current?.value
        const message = messageInput.current?.value
        if (!email)
            setErrorField('email')
        else if (!name)
            setErrorField('name')
        else if (!message)
            setErrorField('message')
        else {
            setErrorField('')
            setNotification({
                status: 'Pending',
                message: 'Your message is sending.',
                title: 'Pending...'
            })
            try {
                const data = await (await fetch('/api/contact', {
                    method: "POST",
                    body: JSON.stringify({ name, email, message }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })).json()
                if (data.ok) {
                    setNotification({
                        status: 'Succuss',
                        message: 'Message sent successfully!',
                        title: 'Successful'

                    })
                }
                else {
                    setNotification({
                        status: 'Error',
                        title: 'Error',
                        message: data.message
                    })
                }
            } catch {
                setNotification({
                    message: 'Error occured from client',
                    title: 'Error',
                    status: 'Error'

                })
            }
            finally {
                setTimeout(() => {
                    setNotification({
                        message: '',
                        status: '',
                        title: ''
                    })
                }, 4000)
            }
        }
    }
    return (
        <section className={styles.overlay}>
            <Head>
                <title>Contact Me</title>
                <meta name='description' content='Send me your messages' />
            </Head>
            <div className={styles.formPage}>
                <form className={styles.formContent} onSubmit={submitHandler}>
                    <h1 className={styles.title}>How can I help you?</h1>
                    <div className={styles.authControlers}>
                        <div className={styles.controller}>
                            <label htmlFor="email">Your Email</label>
                            <input type='email' id='email' ref={emailInput}
                                className={errorField === 'email' ? styles.invalid : ''} onFocus={() => {
                                    errorField === 'email' && emailInput.current?.value && setErrorField('')
                                }} />
                        </div>
                        <div className={styles.controller}>
                            <label htmlFor="name">Your Name</label>
                            <input type='text' id='name' ref={nameInput}
                                className={errorField === 'name' ? styles.invalid : ''} onFocus={() => {
                                    errorField === 'name' && nameInput.current?.value && setErrorField('')
                                }} />
                        </div>
                    </div>
                    <div >
                        <div className={`${styles.controller} ${styles.message} `}>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" cols={30} rows={10} ref={messageInput}
                                className={errorField === 'message' ? styles.invalid : ''}
                                onBlur={() => {
                                    errorField === 'message' &&
                                        messageInput.current?.value && setErrorField('')
                                }} />
                        </div>
                    </div>
                    <button type='submit' className={styles.submitButton}>Send Message</button>
                </form>
            </div>
            {notification.status && <Notification status={notification.status}
                title={notification.title} message={notification.message} />}
        </section>
    )
}

export default Contact
