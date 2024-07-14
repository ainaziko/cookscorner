import React from "react";
import PropTypes from "prop-types";
import styles from './SubmitButton.module.css';

const SubmitButton = ({ className = '', disabled = false, children }) => {
    return (
        <button className={`${styles.submitBtn} ${className}`} type="submit" disabled={disabled}>
            {children}
        </button>
    );
}

SubmitButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default SubmitButton;