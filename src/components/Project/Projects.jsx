import React, { useState, useEffect } from 'react';
import styles from './Projects.module.css';
import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import SweetAlert2 from 'react-sweetalert2';
import { useNavigate } from "react-router-dom";

const Projects = ({ project }) => {
    const [swalProps, setSwalProps] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        setSwalProps({
            show: true,
            title: 'Warning',
            text: 'This website is still under development. Some features may not work properly.',
            icon: 'warning',
        });
    }, []);


    const goToCardPage = (project) => {
        navigate(`/card/${project.id}`, { state: { project } });
    };

    return (
        <section className={styles.container} id='projects'>
            <h1 className={styles.title}>Projects</h1>
            <div>

                {/* <SweetAlert2 {...swalProps} /> */}
            </div>
            <p className={styles.description}>Here are some of my projects that I have worked on. Click on the project to view the demo and source code.
                Many other project that Worked on will be on page soon </p>
            <div className={styles.cards}>
                {
                    projects.map((project, id) => {
                        return (
                            <div key={id} className={styles.card} onClick={() => goToCardPage(project)}>

                                <img className={styles.img} src={getImageUrl(project.imageSrc[0])} alt={project.title} />
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p>{project.description} click On button for more details, demo, code..</p>

                                <div className={styles.listAndButton}>
                                    <div className={styles.bglist}>
                                        <ul className={styles.list}>
                                            {project.skills.map((skill, index) => (
                                                <li key={index}>{skill}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className={styles.btns}>
                                       
                                        <a className={styles.lbtn}  onClick={() => goToCardPage(project)}>Go to Details..</a>
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
