import React from "react"
import QuizItem from "./utils/ReactQuizItem";
import End from "./utils/End";
import styles from './QuizWrapper.module.scss'
import { ReduxQuestions } from "../../configs/data/redux-questions";

export default function ReduxQuizPage() {
    const [step, setStep] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)

    const question = ReduxQuestions[step]
    const width = Math.floor(step / ReduxQuestions.length * 100)
    const validCorrect = (i: number) => {
        if (i === question.correctAnswer) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    {step !== ReduxQuestions.length &&
                        <div style={{ width: `${width}%` }} className={styles.progress} />
                    }
                    {step !== ReduxQuestions.length
                        ? <QuizItem {...question} setStep={setStep} step={step} validCorrect={validCorrect} />
                        : <End correct={correct} />
                    }
                </div>
            </div>
        </div>
    )
};
