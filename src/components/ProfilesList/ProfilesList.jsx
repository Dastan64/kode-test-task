import React from 'react';
import styled from './ProfilesList.module.css';

import ProfileThumb from '../ProfileThumb/ProfileThumb';

const ProfilesList = ({ employees, filter }) => {
    return (
        <div className={styled.profilesList}>
            {employees.map(employee => <ProfileThumb employee={employee} key={employee.id} filter={filter}/>)}
        </div>
    );
};

export default ProfilesList;
