import React from 'react';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import styles from './App.module.css';


function App() {

    return (
        <div className={styles.general}>
            <Nav/>
            <Main/>
        </div>
    );
}

export default App;
