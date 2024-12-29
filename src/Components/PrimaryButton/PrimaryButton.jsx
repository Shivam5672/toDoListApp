import React from 'react';
import classes from './PrimaryButton.module.css';
import { getClasses } from '../../Utils.js';

const PrimaryButton = ({ children, toolTip, onClick, disabled, className}) => {
  return (
    <button
        className={getClasses(className, classes.primaryBtn)}
        onClick={onClick}
        title={toolTip}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default PrimaryButton