//Core
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from './ProfileThumb.module.css';

//Images
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.png';

//Utils
import { formatBirthDate } from '../../utils/formatBirthDate';

//Interfaces
import { ProfileThumbProps } from "../../types/types";

const ProfileThumb = ({ employee, filter }: ProfileThumbProps) => {
    const { avatarUrl, firstName, lastName, userTag, position, birthday, id } = employee ?? {};
    const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
    const profileImageSrc = isAvatarLoaded ? avatarUrl : avatarPlaceholder;
    
    return (
        <article className={styled.profileThumb}>
            <div className={styled.profileThumbContainer}>
                <Link to={`/user/${id}`}>
                    <figure>
                        <img className={styled.profileImage} src={profileImageSrc} alt=""
                             onError={() => setIsAvatarLoaded(false)}/>
                    </figure>
                    <div>
                        <h4 className={styled.profileName}>{`${firstName} ${lastName}`}<span
                            className={styled.profileShort}>{userTag}</span></h4>
                        <span className={styled.profilePosition}>{position}</span>
                    </div>
                </Link>
                {filter?.sort === 'birthday' &&
                    <span className={styled.profileBirthdayDate}>{formatBirthDate(birthday, 'shortened')}</span>}
            </div>
        </article>
    );
};

export default ProfileThumb;
