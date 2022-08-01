//Core
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from './ProfilePage.module.css';

//Icons
import starIcon from '../../assets/images/icons/star-icon.svg';
import phoneIcon from '../../assets/images/icons/phone-icon.svg';
import chevronIcon from '../../assets/images/icons/chevron-left.svg';
import avatarPlaceholder from '../../assets/images/avatarPlaceholder.png';

//Utils
import { formatBirthDate } from '../../utils/formatBirthDate';
import { calculateAge } from '../../utils/calculateAge';
import { formatAgeDeclination } from '../../utils/formatAgeDeclination';

const ProfilePage = ({ employees }) => {
    const [employee, setEmployee] = useState({});
    const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
    const { id } = useParams();

    const { birthday, avatarUrl, firstName, lastName, userTag, position, phone } = employee;

    const profileImageSrc = isAvatarLoaded ? avatarUrl : avatarPlaceholder;
    const age = calculateAge(birthday);

    useEffect(() => {
        const specificPerson = employees.find(employee => employee.id === id);
        setEmployee(specificPerson);
    }, [employees, id])

    return (
        <>
            <header className={styled.header}>
                <figure>
                    <img className={styled.profileAvatar}
                         src={profileImageSrc} alt="" onError={() => setIsAvatarLoaded(false)}/>
                </figure>
                <h2 className={styled.profileName}>{`${firstName} ${lastName}`}<span
                    className={styled.profileTag}>{userTag?.toLowerCase()}</span></h2>
                <span className={styled.profilePosition}>{position}</span>
                <Link to={'/'} className={styled.goBackLink}>
                    <img src={chevronIcon} alt=""/>
                </Link>
            </header>
            <main>
                <section className={styled.infoSection}>
                    <div className={styled.info}>
                        <div className={styled.infoContainer}>
                            <img src={starIcon} alt=""/>
                            <div>
                                <p>{formatBirthDate(birthday)}</p>
                            </div>
                            <p className={styled.infoAge}>{age} {formatAgeDeclination(age)}</p>
                        </div>
                        <div className={styled.infoContainer}>
                            <img src={phoneIcon} alt=""/>
                            <div>
                                <a href={`tel: ${phone}`}>{phone}</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default ProfilePage;
