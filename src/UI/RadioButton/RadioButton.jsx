import React from 'react';
import styled from './RadioButton.module.css';

const RadioButton = ({ text, value, onChange }) => {
    const handleChange = (event) => onChange(event.target.value);
    
    return (
        <label className={styled.radio}>
            <input value={value} type="radio" className={styled.radioInput} name="option" onChange={handleChange}/>
            {text}
        </label>
    );
};

export default RadioButton;
