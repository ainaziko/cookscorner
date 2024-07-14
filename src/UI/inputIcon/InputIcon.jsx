import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from './InputIcon.module.css';
import { toggleVisibility } from '../../store/visibilitySlice';

const InputIcon = ({ icons }) => {
    const visibility = useSelector(state => state.visibility);
    const dispatch = useDispatch();

    const updateVisibility = () => {
        dispatch(toggleVisibility());
    }

    const Icon1Component = icons && icons.length > 0 ? icons[0] : null;
    const Icon2Component = icons && icons.length > 1 ? icons[1] : null;

    return (
        <div className={styles.svgContainer}>
            {Icon1Component ? (
                <span className={styles.icon} onClick={Icon2Component ? updateVisibility : undefined}>
                    {Icon2Component ? (visibility ? <Icon1Component /> : <Icon2Component />) : <Icon1Component />}
                </span>
            ) : (
                <span className={styles.icon}></span>
            )}
        </div>
    );
}

export default InputIcon;
