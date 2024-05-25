import styles from './Home.module.scss'
import { Link } from "react-router-dom";
import { PAGES } from "../../configs/constants/page.const";

export default function Home() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.h1}>Ready to test your knowledge?</h1>
                <Link to={PAGES.QUIZS} className={styles.link}>Go?</Link>
            </div>
        </div>
    )
};
