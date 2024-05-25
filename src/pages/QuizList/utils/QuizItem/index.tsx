import { Link } from "react-router-dom"

interface IQuizItemProps {
    styles: any
    title: string
    description: string
    link: string
}

export default function QuizItem({ styles, title, description, link }: IQuizItemProps) {
    return (
        <div className={styles['quiz-item']}>
            <div className={styles.info}>
                <h4>{title}</h4>
                <h3>{description}</h3>
            </div>
            <Link to={link} className={`btn ${styles.btn}`}>Go</Link>
        </div>
    )
};
