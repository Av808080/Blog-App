import React, { useRef, FormEvent } from 'react'
import styles from './contact.module.scss'
const Contact = () => {
    const emailInput = useRef<HTMLInputElement>(null)
    const nameInput = useRef<HTMLInputElement>(null)
    const messageInput = useRef<HTMLTextAreaElement>(null)
    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const name = nameInput.current?.value
        const email = emailInput.current?.value
        const message = messageInput.current?.value
        if (message && email && name) {
            fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify({ name, email, message }),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(res => res.json()).then(data => console.log(data)
            )
        }
    }
    return (
        <section className={styles.overlay}>
            <div className={styles.formPage}>
                <form className={styles.formContent} onSubmit={submitHandler}>
                    <h1 className={styles.title}>How can I help you?</h1>
                    <div className={styles.authControlers}>
                        <div className={styles.controller}>
                            <label htmlFor="email">Your Email</label>
                            <input type='email' id='email' ref={emailInput} />
                        </div>
                        <div className={styles.controller}>
                            <label htmlFor="name">Your Name</label>
                            <input type='text' id='name' ref={nameInput} />
                        </div>
                    </div>
                    <div >
                        <div className={`${styles.controller} ${styles.message} `}>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" cols={30} rows={10} ref={messageInput} />
                        </div>
                    </div>
                    <button type='submit' className={styles.submitButton}>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
