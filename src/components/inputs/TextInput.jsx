import React from "react";
import PropTypes from "prop-types";
import styles from './TextInput.module.css';
import InputIcon from "../../UI/inputIcon/InputIcon";
import { useSelector } from "react-redux";


const TextInput = ({ id, name, type, value, placeholder, onChange, onBlur, error, icons }) => {
    const visibility = useSelector(state => state.visibility);
    const isPassword = type === "password";


    return (
        <div className={styles.textInput}>
            <p className={styles.placeholderText}>{placeholder}</p>
            <input
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                id={id}
                name={name}
                value={value}
                placeholder={`Enter your ${placeholder}`}
                onChange={onChange}
                onBlur={onBlur}
                type={isPassword && visibility ? "text" : type}
            />
            <InputIcon icons={icons} />
            {error && <p className={styles.errorMsg}>- {error}</p>}
        </div>
    );
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    error: PropTypes.string,
    icon: PropTypes.arrayOf(PropTypes.elementType),
};

export default TextInput;
