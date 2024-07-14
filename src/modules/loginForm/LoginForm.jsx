import React from "react";
import { useFormik } from "formik";
import styles from './LoginForm.module.css';
import TextInput from "../../components/inputs/TextInput";
import SubmitButton from "../../UI/submitBtn/SubmitButton";
import { ReactComponent as VisibleOn } from '../../assets/visibilityOn.svg';
import { ReactComponent as VisibleOff } from '../../assets/visibilityOff.svg';
import { ReactComponent as EmailIcon } from '../../assets/emailSymbol.svg';

const LoginForm = () => {
    const { values, isSubmitting, handleChange, handleBlur, handleSubmit, resetForm } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values, { resetForm }) => {
            const loginData = {
                email: values.email,
                password: values.password
            };
            console.log(loginData);

            await new Promise((resolve) => setTimeout(resolve, 1000));
            resetForm(); // Reset the form after submission
        }
    });

    return (
        <div className={styles.login}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextInput
                    id="email"
                    name="email"
                    type="text"
                    value={values.email}
                    placeholder="Gmail"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icons={[EmailIcon]}
                />
                <TextInput
                    id="password"
                    name="password"
                    type="password"
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
    );
}

export default LoginForm;
