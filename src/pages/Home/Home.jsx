//Core
import React from 'react';
import styled from './Home.module.css';

//Hooks
import { useEmployees} from '../../hooks/useSortedEmployees';
import { useEffect, useState } from 'react';

//Images
import ufoImage from '../../assets/images/ufo.png';
import loupeImage from '../../assets/images/loupe.png';

//Static data
import { tabs } from '../../data/tabs';

//Components
import SearchBar from '../../components/SearchBar/SearchBar';
import ProfilesList from '../../components/ProfilesList/ProfilesList';
import SkeletonSection from '../../components/SkeletonSection/SkeletonSection';
import Error from '../../components/Error/Error';
import Popup from '../../components/Popup/Popup';
import RadioButton from '../../UI/RadioButton/RadioButton';
import TabsList from '../../components/TabsList/TabsList';

const Home = ({ employees, isPopupOpen, setIsPopupOpen, hasFailed, isLoading }) => {
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        if (employees.length > 0) {
            setFiltered([...employees])
        }
    }, [employees])

    const sortedAndSearchedEmployees = useEmployees(filtered, filter.sort, filter.query);

    const sortList = (sort) => {
        setFilter({ ...filter, sort, })
        setIsPopupOpen(false);
    }

    return (
        <div className={styled.home}>
            <SearchBar setIsPopupOpen={setIsPopupOpen} filter={filter} setFilter={setFilter}/>
            <main>
                <TabsList tabs={tabs} data={employees} setFiltered={setFiltered}/>
                {isLoading && <SkeletonSection/>}
                {!isLoading && sortedAndSearchedEmployees.length > 0 ?
                    <ProfilesList employees={sortedAndSearchedEmployees} filter={filter}/> :
                    <Error>
                        <figure>
                            <img src={loupeImage} alt="Лупа" draggable={false}/>
                        </figure>
                        <h2>Мы никого не нашли</h2>
                        <p>Попробуй скорректировать запрос</p>
                    </Error>}
                {hasFailed && (
                    <Error>
                        <figure>
                            <img src={ufoImage} alt="Картинка с НЛО" draggable={false}/>
                        </figure>
                        <h2>Какой-то сверхразум всё сломал</h2>
                        <p>Постараемся быстро починить</p>
                        <button>Попробовать снова</button>
                    </Error>
                )}
                <Popup isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
                    <h3>Сортировка</h3>
                    <div>
                        <RadioButton value={'firstName'} text={'По алфавиту'} onChange={sortList}/>
                        <RadioButton value={'birthday'} text={'По дню рождения'} onChange={sortList}/>
                    </div>
                </Popup>
            </main>
        </div>
    );
};

export default Home;
