import React from 'react';
import styled from './TabButton.module.css';
import { TabButtonProps } from "../../types/types";

const TabButton = ({ tab, activeTab, callback }: TabButtonProps) => {
    const { title, id, slug } = tab ?? {};

    return <button value={slug} className={`${styled.tabButton} ${id === activeTab ? styled.tabButtonActive : ''}`}
                   onClick={callback} id={id.toString()}>{title}</button>
};

export default TabButton;
