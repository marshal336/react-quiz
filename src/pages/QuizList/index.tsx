import { Link } from "react-router-dom";
import { PAGES } from "../../configs/constants/page.const";
import styles from './QuizList.module.scss'
import QuizItem from "./utils/QuizItem";

export default function QuizList() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.title}>Choise a quiz</h1>
                <div className={styles['quiz-list']}>
                    <QuizItem styles={styles} title="React quiz" description="Test your knowledge in react"/>
                    <QuizItem styles={styles} title="React quiz" description="Test your knowledge in react"/>
                </div>
            </div>
        </div>
    )
};
