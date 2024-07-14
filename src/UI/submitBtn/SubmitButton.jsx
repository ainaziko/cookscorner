import React from "react";
import PropTypes from "prop-types";
import styles from './SubmitButton.module.css';

const SubmitButton = ({ className, disabled, onClick, children }) => {
    return (
        <button className={`${styles.submitBtn} ${className}`} disabled={disabled} onClick={onClick}>
            {children}
        </button>
    );
}

SubmitButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

SubmitButton.defaultProps = {
    className: '',
    disabled: false,
};

export default SubmitButton;
