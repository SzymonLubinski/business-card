import styles from './Projects.module.css';

const jFarm = require('../../img/josehpFarm.png');
const lTaco = require('../../img/logans.png');
const pList = require('../../img/ProductList.png');
const mShop = require('../../img/MacrameShop.png');
const cDocs = require('../../img/DocsCreator.png');


export default function Projects() {
    return (
        <div className={styles.main}>
            <section>
                <h1>My Projects</h1>
            </section>
            <section>
                <div className={styles.project}>
                    <img src={jFarm} alt={"my game josep's farm"}/>
                    <div>
                        <h3>Josep's Farm</h3>
                        <p>Joseph's Farm is written in Python using the PyGame library and a few others.
                            The game has many features including saving and loading the game state.
                        </p>
                        <a href={'https://github.com/SzymonLubinski/Josephs-Farm'} target={'_blank'}>
                            Link do the GitHub repository
                        </a>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={lTaco} alt={"logan's taco"}/>
                    <div>
                        <h3>Logan's Taco</h3>
                        <p>Frontend and backend restaurant website written in TypeScript with Next.js.</p>
                        <p>The application uses the function of sending e-mails, databases,
                            registration and logging in Next-Auth, data analysis and many others.
                        </p>
                        <a href={'https://logans-taco.vercel.app/'} target={'_blank'}>
                            Link do the hosted website
                        </a>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={pList} alt={"products list"}/>
                    <div>
                        <h3>Product List</h3>
                        <p>Simple website with backend in PHP</p>
                        <p>App has options like add and delete product from list.
                            I used MySQL to kept product items
                        </p>
                        <a href={'https://productlistbyszymon.000webhostapp.com'} target={'_blank'}>
                            Link do the hosted website
                        </a>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={mShop} alt={"macrame shop"}/>
                    <div>
                        <h3>Macrame Shop</h3>
                        <p>Only Frontend website</p>
                        <p>Written with Bootstrap</p>
                        <a href={'https://szymonlubinski.github.io/macrame_shop/'} target={'_blank'}>
                            Link do the hosted website
                        </a>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={cDocs} alt={"document creator"}/>
                    <div>
                        <h3>Document Creator</h3>
                        <p>An application written in Python that prepares a document
                            based on Eurostat data and saves it in pdf format.
                        </p>
                        <p>The program is not written based on OOP principles.
                            It was just an exercise in the skills learned in the course.
                        </p>
                        <a href={'https://github.com/SzymonLubinski/document-creator'} target={'_blank'}>
                            Link do the GitHub repository
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}