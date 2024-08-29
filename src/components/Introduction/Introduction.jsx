import React from 'react'
import { getImageUrl } from '../../utils'
import Style from './Introduction.module.css'

const Introduction = () => {
    return (
        <section className={Style.container}>
            <div className={Style.content}>
                <h1 className={Style.title}>
                    Hey, I'm Mo ali Resho
                </h1>
                <p className={Style.description}>I'm a full-stack developer using different programming languages like C#, javascript, java sql. reach me to learn more..</p>
                    <a className={Style.contactBtn} href="mailto:hamoderaso@outlook.com ">Contact Me</a>
            </div>

            <img src={getImageUrl("hero/myImg.png")} alt="introImageOfMe" className={Style.introImg} />
            <div className={Style.topBlur} />
            <div className={Style.bottomBlur} />
        </section>
    )
}

export default Introduction
