import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Contacts.module.css'
const Contacts = () => {
    return (
        <section className={styles.container} id='contact'>
            <div className={styles.content}>


                <div className={styles.details}>
                    <h1 className={styles.title}>
                        Contacts
                    </h1>
                    <p>Feel free to reach out!</p>
                </div>

                <div className={styles.contactItems}>

                    <a className={styles.contactItem} href="mailto:hamoderaso@outlook.com" target="_blank" rel="noopener noreferrer">
                        <img className={styles.contactItemImg} src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
                        <p>hamoderaso@outlook.com</p>
                    </a>


                    <a className={styles.contactItem} href="https://github.com/hamoudi8080" target="_blank" rel="noopener noreferrer">
                        <img className={styles.contactItemImg} src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
                        <p>https://github.com/hamoudi8080</p>
                    </a>


                    <a className={styles.contactItem} href="https://www.linkedin.com/in/mo-ali-resho-661a0a234" target="_blank" rel="noopener noreferrer">
                        <img className={styles.contactItemImg} src={getImageUrl("contact/linkedinIcon.png")} alt="linkedinIcon" />
                        <p>https://www.linkedin.com/in/mo-ali-resho-661a0a234</p>
                    </a>

                </div>
            </div>

        </section>
    )
}

export default Contacts
