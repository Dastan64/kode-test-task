import React from 'react';
import styled from './Error.module.css';
import { ErrorProps } from "../../types/types";

const Error = ({ children }: ErrorProps) => {
    return (
        <section className={styled.errorSection}>
            {children}
        </section>
    );
};

export default Error;
