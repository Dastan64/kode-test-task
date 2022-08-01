import React from 'react';
import styled from './TabButton.module.css';

const TabButton = ({ tab, activeTab, callback }) => {
    const { title, id, slug } = tab ?? {};

    return <button value={slug} className={`${styled.tabButton} ${id === activeTab ? styled.tabButtonActive : ''}`}
                    onClick={callback} id={id}>{title}</button>
};

export default TabButton;
