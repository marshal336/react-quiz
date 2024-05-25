import { Link } from "react-router-dom"
import { PAGES } from "../../../../configs/constants/page.const"

interface IQuizItemProps {
    styles: any
    title: string
    description: string
}

export default function QuizItem({ styles, title, description }: IQuizItemProps) {
    return (
        <div className={styles['quiz-item']}>
            <div className={styles.info}>
                <h4>{title}</h4>
                <h3>{description}</h3>
            </div>
            <Link to={PAGES.REACT_QUIZ} className={`btn ${styles.btn}`}>Go</Link>
        </div>
    )
};
