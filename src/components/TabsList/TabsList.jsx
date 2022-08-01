import React, { useState } from 'react';
import styled from './TabsList.module.css';

import TabButton from '../../UI/TabButton/TabButton';

const TabsList = ({ tabs, data, setFiltered }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (event) => {
        setActiveTab(+event.target.id);
        const filtered = data.filter(item => {
            if (event.target.value === 'all') {
                return data;
            }
            return item.department === event.target.value
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
