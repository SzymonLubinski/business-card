import {FaJs, FaCss3Alt, FaHtml5, FaPython, FaPhp, FaNode, FaSass, FaReact} from "react-icons/fa";
import styles from './Tech.module.css';
import TiltObj from "../UI/TiltObj";

const oracle = require('../../img/svg/oracle.svg').default;
const mongo = require('../../img/svg/mongodb.svg').default;
const mysql = require('../../img/svg/mysql.svg').default;
const prisma = require('../../img/svg/prisma.svg').default;
const bootstrap = require('../../img/svg/bootstrap.svg').default;
const nextJs = require('../../img/svg/next-js.svg').default;
const nextAuth= require('../../img/next-auth.png');
const pandas = require('../../img/svg/pandas.svg').default;


export default function Tech () {
    const options = {
        max: 25,
        speed: 400,
    }

    return (
        <div className={styles.main}>
            <section>
                <h1>Frontend</h1>
                <div className={styles.container}>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>JavaScript</h2>
                            <FaJs className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>React</h2>
                            <FaReact className={styles.tech}/>
                        </div>
                    </TiltObj>

                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>CSS</h2>
                            <FaCss3Alt className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>SASS</h2>
                            <FaSass className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>HTML</h2>
                            <FaHtml5 className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Bootstrap</h2>
                            <img className={styles.tech}
                                 src={bootstrap}
                                 alt={'bootstrap'}/>
                        </div>
                    </TiltObj>
                </div>
            </section>
            <section>
                <h1>Backend</h1>
                <div className={styles.container}>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Node.js</h2>
                            <FaNode className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Next.js</h2>
                            <img className={styles.tech}
                                 src={nextJs}
                                 alt={'next.js'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Next Auth</h2>
                            <img className={styles.tech}
                                 src={nextAuth}
                                 alt={'next auth'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Python</h2>
                            <FaPython className={styles.tech}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Pandas</h2>
                            <img className={styles.tech}
                                 src={pandas}
                                 alt={'pandas'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>PHP</h2>
                            <FaPhp className={styles.tech}/>
                        </div>
                    </TiltObj>
                </div>
            </section>
            <section>
                <h1>Databases</h1>
                <div className={styles.container}>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Oracle DB</h2>
                            <img className={styles.tech}
                                 src={oracle}
                                 alt={'oracle db'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Mongo</h2>
                            <img className={styles.tech}
                                 src={mongo}
                                 alt={'mongo db'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>MySQL</h2>
                            <img className={styles.tech}
                                 src={mysql}
                                 alt={'mysql'}/>
                        </div>
                    </TiltObj>
                    <TiltObj options={options}>
                        <div className={styles.box}>
                            <h2 className={styles.title}>Prisma</h2>
                            <img className={styles.tech}
                                 src={prisma}
                                 alt={'prisma db'}/>
                        </div>
                    </TiltObj>
                </div>
            </section>
        </div>
    )
}