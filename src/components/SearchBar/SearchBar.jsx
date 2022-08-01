import React from 'react';
import styled from './SearchBar.module.css';

//Icons
import sortIcon from '../../assets/images/icons/sort-icon.svg';

const SearchBar = ({ setIsPopupOpen, filter, setFilter }) => {
    const handleClick = () => setIsPopupOpen(true);
    const handleChange = (event) => setFilter({...filter, query: event.target.value});

    return (
        <header>
            <h1>Поиск</h1>
            <div className={styled.searchBar}>
                <input value={filter.query} className={styled.searchInput} type="text"
                       placeholder="Введи имя, тег, почту..." onChange={handleChange}/>
                <button className={styled.searchSortButton} onClick={handleClick}><img className={styled.sortIcon}
                                                                                       src={sortIcon} alt="" width={24}
                                                                                       height={24}/></button>
            </div>
        </header>
    );
};

export default SearchBar;
