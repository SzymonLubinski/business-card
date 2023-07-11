import {FaGithub, FaLinkedin, FaUserCircle, FaRobot, FaClipboardList, FaHandshake} from "react-icons/fa";
import {IconContext} from "react-icons";
import styles from './Nav.module.css';
import TabBtn from "../UI/TabBtn";

const portrait = require('../../img/portret.jpg');


export default function Nav() {
    return (
        <nav className={styles.navBar}>
            <IconContext.Provider value={{className: styles.icons}}>
            <section className={styles.imgSection}>
                <img src={portrait} alt={'my portrait'}/>
            </section>
            <section className={styles.linksSection}>
                <a href={'https://github.com/SzymonLubinski'}>
                    <FaGithub/>
                </a>
                <a href={'https://www.linkedin.com/in/szymon-lubi%C5%84ski-5b6a62243'}>
                    <FaLinkedin/>
                </a>
            </section>
            <section className={styles.tabsSection}>
                <TabBtn tabText={'About me'}
                        icon={<FaUserCircle/>}
                />
                <TabBtn tabText={'My projects'}
                        icon={<FaRobot/>}
                />
                <TabBtn tabText={'Technologies'}
                        icon={<FaClipboardList/>}
                />
                <TabBtn tabText={'Cooperation'}
                        icon={<FaHandshake />}
                />
            </section>
            </IconContext.Provider>
        </nav>
    )
}