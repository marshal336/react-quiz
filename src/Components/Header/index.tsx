
import { Link } from 'react-router-dom'
import { PAGES } from '../../configs/constants/page.const'
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <Link to={PAGES.HOME} className={styles.title}>React Quiz</Link>
                <div className={styles.btns}>
                    <Link to={PAGES.CREATE} className={styles.btn}>Create</Link>
                    <Link to={PAGES.QUIZS} className={styles.btn}>Quiz List</Link>
                </div>
            </div>
        </header>
    )
};
