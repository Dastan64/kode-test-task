import React, { useState } from 'react';
import styled from './TabsList.module.css';

import TabButton from '../../UI/TabButton/TabButton';
import { TabsListProps } from "../../types/types";

const TabsList = ({ tabs, data, setFiltered }: TabsListProps) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const target = event.target as HTMLButtonElement;
        setActiveTab(+target.id);
        const filtered = data.filter(item => {
            if (target.value === 'all') {
                return data;
            }
            return item.department === target.value
        });
        setFiltered(filtered);
    };

    return (
        <div className={styled.tabsList}>
            {tabs.map(tab => <TabButton tab={tab} key={tab.id} callback={handleTabClick} activeTab={activeTab}/>)}
        </div>
    );
};

export default TabsList;
