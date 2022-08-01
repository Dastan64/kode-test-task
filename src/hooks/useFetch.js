import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    setEmployees(data.items);
                    setIsLoading(false);
                }).catch(error => {
                setIsLoading(false);
                setHasFailed(true)
            })
        }
        fetchData()
    }, [url])

    return { employees, isLoading, hasFailed }
};

export default useFetch;
