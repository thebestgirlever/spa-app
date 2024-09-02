import styles from './LoginPage.module.css'
import ButtonOk from '../components/ButtonOk/ButtonOk';
import TextFields from '../components/TextFields/TextFields';



function LoginPage() {
    return (
        <>
            <div className={styles.root}>
                <TextFields />
                <ButtonOk />
            </div>
        </>
    )
}

export default LoginPage