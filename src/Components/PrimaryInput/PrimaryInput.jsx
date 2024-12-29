import React from 'react';
import classes from './PrimaryInput.module.css';

const PrimaryInput = ({
    min,
    max,
    name,
    label,
    value,
    accept,
    onKeyUp,
    pattern,
    onChange,
    disabled,
    onKeyDown,
    isRequired,
    placeholder,
    maxLength,
    type = "text",
}) => {
  return (
    <div className={classes.formControl}>
        {label && (
            <label htmlFor='input' className={classes.label}>
                {label}
                {isRequired && <span className={classes.mandatory}>*</span>}
            </label>
        )}
        <input
            id='input'
            max={max}
            min={min}
            name={name}
            accept={accept}
            type={type}
            value={value}
            pattern={pattern}
            onKeyUp={onKeyUp}
            onChange={onChange}
            disabled={disabled}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            className={classes.primaryInput}
            maxLength={maxLength}
        />
    </div>
  )
}

export default PrimaryInput