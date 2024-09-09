import React from 'react'
import { getImageUrl } from '../../utils'
import Style from './Introduction.module.css'
//import Typewriter from './TypeWriter'
import Typewriter from 'typewriter-effect';

const Introduction = () => {
    return (
        <section className={Style.container}>
            <div className={Style.content}>
                <h1 className={Style.title}>
                    Hey, I'm Mo ali Resho
                </h1>
                <div className={Style.description}>
    <Typewriter
        options={{
            strings: [
                "Software development with use of different technologies for me is a passion and a playground where I enjoy making well-structured and efficient solutions for whatever challenges tossed at me. I have gained a great skill set within Web, APIs, databases development, but more importantly I possess an engineering mindset that enables me to learn new stuff, adapt and execute quickly. It also worth mentioning that I gained communications skills during my study, internship, student worker time."
            ],
            autoStart: true,
            loop: true,
            delay: 30, // Speed up typing
            deleteSpeed: 25, // Speed up deleting
            pauseFor: 50000,  
        }}
    />
</div>

                <div className={Style.Btns}>
                    <a className={Style.contactBtn} href="mailto:hamoderaso@outlook.com ">Contact Me</a>
                    <a className={Style.contactBtn} href={getImageUrl("CV/my resume.pdf")}>Download CV</a>
                </div>


            </div>

            <img src={getImageUrl("hero/myImg.png")} alt="introImageOfMe" className={Style.introImg} />
            <div className={Style.topBlur} />
            <div className={Style.bottomBlur} />
        </section>
    )
}

export default Introduction
