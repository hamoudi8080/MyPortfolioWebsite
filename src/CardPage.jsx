import React from 'react'
import styles from './App.module.css'
import Contacts from './components/Contacts/Contacts'
import { Navbar } from './components/Navbar/Navbar'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import stylesOfCardPage from './CardPage.module.css';
import { getImageUrl } from './utils';

const CardPage = () => {
    const { id } = useParams();

    const location = useLocation();
    return (
        <div className={styles.App}>
            <Navbar />

            <div className={stylesOfCardPage.container}>

                <h2 className={stylesOfCardPage.title}>
                    {location.state.project.title}
                </h2>



                <div className={stylesOfCardPage.images}>

                    {location.state.project.imageSrc.length > 0 && (
                        <img className={stylesOfCardPage.cardImg} src={getImageUrl(location.state.project.imageSrc[0])} alt={location.state.project.title} />
                    )}

                    <div className={stylesOfCardPage.columnImages}>
                        {location.state.project.imageSrc.slice(1).map((src, index) => (
                            <img key={index} className={stylesOfCardPage.cardImg} src={getImageUrl(src)} alt={location.state.project.title} />
                        ))}
                    </div>
                </div>



                <p  >{location.state.project.description}</p>

                <div>
                    <h3>Skills</h3>
                    <ul className={stylesOfCardPage.skills} >
                        {location.state.project.skills.map((skill, index) => (
                            <li className={stylesOfCardPage.skill} key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>

                <div className={stylesOfCardPage.videoCard}>
                    <iframe
                        className={stylesOfCardPage.videoIframe}
                        height="315"
                        src="https://www.youtube.com/embed/your_video_id"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className={stylesOfCardPage.btns}>

                    <a className={stylesOfCardPage.lbtn}  >Go Source Code</a>
                </div>


            </div>

            <Contacts />
        </div>
    )
}

export default CardPage
