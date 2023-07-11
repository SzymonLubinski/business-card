import {BiLogoGmail} from "react-icons/bi";
import {FaUserClock, FaUserGraduate} from "react-icons/fa";
import {BsPencilSquare} from "react-icons/bs";
import styles from './Cooperation.module.css';

export default function Cooperation() {

    return (
        <div className={styles.main}>
            <h1>Cooperation</h1>
            <section className={styles.cooperation}>
                <h2>Cooperation forms</h2>
                <ul>
                    <li>
                        <h3>employment contract</h3>
                        <FaUserClock/>
                        <p>full-time contract</p>
                    </li>
                    <li>
                        <h3>order contract</h3>
                        <FaUserGraduate/>
                        <p>contract for a person with the status of a student</p>
                    </li>
                    <li>
                        <h3>assignment</h3>
                        <BsPencilSquare/>
                        <p>Custom website development. I can issue
                            a VAT invoice for the execution of the assignment
                        </p>
                    </li>
                </ul>
            </section>
            <section>
                <h2>Contact</h2>
                <div className={styles.contact}>
                    <BiLogoGmail/>
                    <p>lubinskis90@gmail.com</p>
                </div>
            </section>
        </div>
    )
}