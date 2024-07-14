import React from "react";
import { useFormik } from "formik";
import styles from './LoginForm.module.css'
import TextInput from "../../components/inputs/TextInput";
import SubmitButton from "../../UI/submitBtn/SubmitButton";
import { ReactComponent as VisibleOn } from '../../assets/visibilityOn.svg';
import { ReactComponent as VisibleOff } from '../../assets/visibilityOff.svg';
import { ReactComponent as EmailIcon } from '../../assets/emailSymbol.svg'

const LoginForm = () => {
    const onSubmit = async (values, actions) => {
        const loginData = {
            email: values.email,
            password: values.password
        }
        console.log(loginData)

        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    }

    const { values, isSubmitting, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit
    })

    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextInput
                    id="email"
                    name="email"
                    value={values.email}
                    placeholder="Gmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icons={[EmailIcon]}
                />
                <TextInput
                    id="password"
                    name="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icons={[VisibleOn, VisibleOff]}
                />
                <SubmitButton className={styles.loginBtn} disabled={isSubmitting}>
                    Sign in
                </SubmitButton>
            </form>
            <p className={styles.goRegisterLink}>I don’t have an account? Sign Up Now</p>
        </div>
    )
}

export default LoginForm;