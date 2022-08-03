import React, { ChangeEvent } from 'react';
import styled from './RadioButton.module.css';
import { RadioButtonProps } from "../../types/types";

const RadioButton = ({ text, value, onChange }: RadioButtonProps) => {
    const handleChange = (event:ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

    return (
        <label className={styled.radio}>
            <input value={value} type="radio" className={styled.radioInput} name="option" onChange={handleChange}/>
            {text}
        </label>
    );
};

export default RadioButton;
