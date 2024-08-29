import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from './About.module.css'

const About = () => {
    return (
        <section className={Styles.container}>


            <h2 className={Styles.title}>About</h2>


            <div className={Styles.content}>

                <img className={Styles.aboutImage} src={getImageUrl("about/aboutImage.png")} alt="" />

                <div className={Styles.aboutItems}>

                    <div className={Styles.aboutItem}>
                        <img className={Styles.contentIcon} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={Styles.contentTitleAndparagraph} >
                            <h3>Frontend Developer</h3>
                            <p>
                                I'm a frontend developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>

                    </div>



                    <div className={Styles.aboutItem}>
                        <img className={Styles.contentIcon} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={Styles.contentTitleAndparagraph}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>

                    </div>


                    <div className={Styles.aboutItem}>

                        <img className={Styles.contentIcon} src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={Styles.contentTitleAndparagraph} >

                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>


                    </div>
                </div>
            </div>



        </section>
    )
}

export default About
