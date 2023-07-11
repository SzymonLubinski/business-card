
import styles from './Main.module.css';
import {useAppSelector} from "../../store/hooks";
import About from "./About";
import Projects from "./Projects";
import Tech from "./Tech";
import Cooperation from "./Cooperation";


export default function Main () {
    const BTNAction = useAppSelector(state => state.tab)

    return (
        <main className={styles.main}>
            {BTNAction.tab === 'About me' && <About/>}
            {BTNAction.tab === 'My projects' && <Projects/>}
            {BTNAction.tab === 'Technologies' && <Tech/>}
            {BTNAction.tab === 'Cooperation' && <Cooperation/>}
        </main>
    )
}