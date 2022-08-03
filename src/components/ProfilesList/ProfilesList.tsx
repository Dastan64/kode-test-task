import React from 'react';
import styled from './ProfilesList.module.css';

import ProfileThumb from '../ProfileThumb/ProfileThumb';
import { ProfilesListProps } from "../../types/types";

const ProfilesList = ({ employees, filter }: ProfilesListProps) => {
    return (
        <div className={styled.profilesList}>
            {employees.map(employee => <ProfileThumb employee={employee} key={employee.id} filter={filter}/>)}
        </div>
    );
};

export default ProfilesList;
