//Core
import { Routes, Route } from 'react-router-dom';
import styled from './App.module.css';

//Hooks
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';

//Pages
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import Home from '../../pages/Home/Home';

const App = () => {
    const url = 'https://stoplight.io/mocks/kode-education/trainee-test/25143926/users';
    const { employees, isLoading, hasFailed } = useFetch(url)
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className={styled.app}>
            <Routes>
                <Route path="/"
                       element={<Home isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} employees={employees}
                                      isLoading={isLoading}
                                      hasFailed={hasFailed}/>}/>
                <Route path="/user/:id" element={<ProfilePage employees={employees}/>}/>
            </Routes>

        </div>
    );
}

export default App;
