import { IQuestion } from "../../configs/types/question.types";
import styles from './QuizItem.module.scss'

interface IQuizItemProps extends IQuestion {
    validCorrect: (i: number) => void
    setStep: (step: number) => void
    step: number
}

export default function QuizItem({ correctAnswer, options, question, setStep, step, validCorrect }: IQuizItemProps) {
    const onClick = (i: number) => {
        setStep(step + 1)
        validCorrect(i)
    }
    return (
        <div className={styles.root}>
            <h2>{question}</h2>
            <ul className={styles.ul}>
                {options.map((el, i) => (
                    <li
                    onClick={() => onClick(i)}
                    key={i}
                    className={styles.li}>{el}</li>
                ))}
            </ul>
        </div>
    )
};
