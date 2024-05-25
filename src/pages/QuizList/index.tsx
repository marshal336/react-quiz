import { PAGES } from '../../configs/constants/page.const';
import styles from './QuizList.module.scss'
import QuizItem from "./utils/QuizItem";

export default function QuizList() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h1 className={styles.title}>Choise a quiz</h1>
                <div className={styles['quiz-list']}>
                    <QuizItem
                        styles={styles}
                        title="React quiz"
                        description="Test your knowledge in react"
                        link={PAGES.REACT_QUIZ} />
                    <QuizItem
                        styles={styles}
                        title="Redux quiz"
                        description="Test your knowledge in redux"
                        link={PAGES.REDUX_QUIZ} />
                    <QuizItem
                        styles={styles}
                        title="NextJS quiz"
                        description="Test your knowledge in next.js"
                        link={PAGES.NEXT_JS_QUIZ} />
                </div>
            </div>
        </div>
    )
};
