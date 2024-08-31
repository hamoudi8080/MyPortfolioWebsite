import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils'
const Projects = ({ project }) => {
    return (
        <section className={styles.container} id='projects'>
            <h1 className={styles.title}>Projects</h1>

            <div className={styles.cards}>
                {
                    projects.map((project, id) => {
                        return (
                            <div key={id} className={styles.card}>
                                <img className={styles.img} src={getImageUrl(project.imageSrc)} alt={project.title} />
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className={styles.listAndButton}>
                                    <div className={styles.bglist}>
                                        <ul className={styles.list}>
                                            {project.skills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.btns}>
                                        <a className={styles.lbtn} href={project.link}>View demo</a>
                                        <a className={styles.lbtn} href={project.source}>Source Code</a>
                                    </div>
                                </div>


                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Projects
