import React from 'react';
import styled from './Error.module.css';

const Error = ({ children }) => {
    return (
        <section className={styled.errorSection}>
            {children}
        </section>
    );
};

export default Error;
