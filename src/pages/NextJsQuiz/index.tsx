import React from "react"
import QuizItem from "./utils/NextJsQuizItem";
import End from "./utils/End";
import styles from './QuizWrapper.module.scss'
import { NextjsQuestions } from "../../configs/data/nextjs-questions";

export default function NextJsQuizPage() {
    const [step, setStep] = React.useState(0)
    const [correct, setCorrect] = React.useState(0)

    const question = NextjsQuestions[step]
    const width = Math.floor(step / NextjsQuestions.length * 100)
    const validCorrect = (i: number) => {
        if (i === question.correctAnswer) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className={styles.root}>
            <div className="container">
                <div className={styles.wrapper}>
                    {step !== NextjsQuestions.length &&
                        <div style={{ width: `${width}%` }} className={styles.progress} />
                    }
                    {step !== NextjsQuestions.length
                        ? <QuizItem {...question} setStep={setStep} step={step} validCorrect={validCorrect} />
                        : <End correct={correct} />
                    }
                </div>
            </div>
        </div>
    )
};
