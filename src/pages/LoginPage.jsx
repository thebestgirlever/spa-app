import { useNavigate } from "react-router-dom";

import styles from './LoginPage.module.css'
import ButtonOk from '../components/ButtonOk/ButtonOk';
import TextFields from '../components/TextFields/TextFields';



function LoginPage() {

    const navigate = useNavigate()
    const onClickToTable = () => {
        navigate('/table');
    }
    const onClickToAuth = () => {
        navigate('/auth')
    }

    return (
        <>
            <div className={styles.root}>
                <TextFields />
                <div className={styles.buttons}>
                    <ButtonOk
                        navOnClick={onClickToTable}
                        buttonText="GO!"
                    />
                    <ButtonOk
                        navOnClick={onClickToAuth}
                        buttonText="Авторизация"
                    />
                </div>
            </div>
        </>
    )
}

export default LoginPage