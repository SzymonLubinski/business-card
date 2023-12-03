import React, {useEffect, useState} from 'react';
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import {useSelector} from "react-redux";
import {RootState} from "./store";
import ProjectPreview from "./components/Portal/ProjectPreview";
import styles from './App.module.css';


function App() {
    const portal = useSelector((state: RootState) => state.portal);
    const tab = useSelector((state: RootState) => state.tab.tab);
    const [openPanel, setOpenPanel] = useState<boolean>(false);
    const panelStyles = openPanel ? styles.panel : `${styles.panel} ${styles.hidePanel}`;

    useEffect(() => {
        setOpenPanel(false);
    }, [tab]);

    return (
        <div className={styles.general}>
            <div className={panelStyles}>
                <Nav/>
                <div className={styles.mobile}>
                    <button className={styles.mobileBtn} onClick={() => setOpenPanel(!openPanel)}>
                        {openPanel ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        )}
                    </button>
                </div>
            </div>

            <Main/>
            {portal.active && (
                <ProjectPreview project={portal.item}/>
            )}
        </div>
    );
}

export default App;
