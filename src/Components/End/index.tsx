import { ReactQuiz } from "../../configs/data"
import styles from './End.module.scss'
interface IEndProps {
    correct: number
}

export default function End({ correct }: IEndProps) {
    return (
        <div className={styles.root}>
            <img
                width={100}
                height={100}
                src="https://as2.ftcdn.net/v2/jpg/00/88/59/17/1000_F_88591703_XcsbAg9gpqccIGJI4C52FJr42saKzZVN.jpg"
                alt="logo"
                className={styles.logo} />
            <h2>Congratulations!!</h2>
            <p>You answered {correct} out of {ReactQuiz.length} correctly</p>
            <a href='/' className={styles.btn}>Restart?</a>
        </div>
    )
};
