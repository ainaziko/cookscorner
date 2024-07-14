import React from "react";
import Preloader from '../../components/splash/Preloader'
import LoginForm from "../../modules/loginForm/LoginForm";
import HeadMessage from "../../UI/headMessage/HeadMessage";
import styles from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={styles.login}>
            <Preloader/>
            <HeadMessage ordinaryText={'Welcome Back To'} boldText={'Cooks Corner'}/>
            <LoginForm/>
        </div>
    )
}

export default LoginPage;