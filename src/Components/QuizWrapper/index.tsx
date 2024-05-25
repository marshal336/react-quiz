import React from "react"
import QuizItem from "../QuizItem";
import End from "../End";
import styles from './QuizWrapper.module.scss'
import { ReactQuiz } from "../../configs/data"

export default function QuizWrapper() {
    const [step, setStep] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)

    const question = ReactQuiz[step]
    const width = Math.floor(step / ReactQuiz.length * 100)
    const validCorrect = (i: number) => {
        if (i === question.correctAnswer) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    {step !== ReactQuiz.length &&
                        <div style={{ width: `${width}%` }} className={styles.progress} />
                    }
                    {step !== ReactQuiz.length
                        ? <QuizItem {...question} setStep={setStep} step={step} validCorrect={validCorrect} />
                        : <End correct={correct} />
                    }
                </div>
            </div>
        </div>
    )
};
