import styles from './About.module.css';


export default function About () {
    return (
        <div className={styles.main}>
            <section>
                <h1>About me</h1>
                <p>I'm 24 years old, and I am graduate University of Rzeszow. The IT industry is the most interesting
                    for me because in my opinion a programmer is like an artist.
                </p>
                <p>I'm come from south Poland. To be precise, from the village of Kielczawa located in the Bieszczady
                    Mountains in Subcarpathia.
                </p>
            </section>
            <section>
                <h1>Skills</h1>
                <p>I enjoy creating websites and writing applications. Every day after work I learn new technologies
                    and I believe that the most valuable knowledge is for free.
                    All you need is the time and willingness to learn.
                </p>
                <p>More about my skills in "My projects" and "Technologies" section</p>
            </section>
        </div>
    )
}