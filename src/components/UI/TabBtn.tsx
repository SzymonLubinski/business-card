
import {tabAction} from "../../store/tab-slice";
import styles from './TabBtn.module.css';
import {TabBtnTypes} from "../../models/MyTypes";
import {useAppDispatch} from "../../store/hooks";


export default function TabBtn (
    props: TabBtnTypes
) {
    const dispatch = useAppDispatch();
    const btnClickHandler = () => {
        dispatch(tabAction.changeTab(props.tabText));
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={btnClickHandler}>
                <span>
                    <div>{props.icon}</div>
                    <div>{props.tabText}</div>
                </span>
            </button>
        </div>
    )
}