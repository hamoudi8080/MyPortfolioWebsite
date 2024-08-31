import React from 'react'
import { getImageUrl } from '../../utils'
import Styles from './About.module.css'

const About = () => {
    return (
        <section className={Styles.container} id='about'>


            <h2 className={Styles.title}>About</h2>


            <div className={Styles.content}>

                <img className={Styles.aboutImage} src={getImageUrl("about/programmer.png")} alt="" />

                <div className={Styles.aboutItems}>

                    <div className={Styles.aboutItem}>
                        <img className={Styles.contentIcon} src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={Styles.contentTitleAndparagraph} >
                            <h3>Full-stack Developer</h3>
                            <p>
                                I'm a Full-stack with experience in building responsive
                                web applications, APIs and databases.
                            </p>
                        </div>

                    </div>



                    <div className={Styles.aboutItem}>
                        <img className={Styles.contentIcon} src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={Styles.contentTitleAndparagraph}>
                            <h3>Backend Developer</h3>
                            <p>
                                I have some experience in building Backend with RESTful APIs and databases.
                            </p>
                        </div>

                    </div>


                    <div className={Styles.aboutItem}>

                        <img className={Styles.contentIcon} src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
                        <div className={Styles.contentTitleAndparagraph} >

                            <h3>Frontend Developer </h3>
                            <p>
                                I have designed multiple landing web applicaitons and have created design
                                systems as well.
                            </p>
                        </div>


                    </div>
                </div>
            </div>



        </section>
    )
}

export default About
