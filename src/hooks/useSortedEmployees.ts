import { useMemo } from 'react';
import { Employee } from "../types/types";

export const useSortedEmployees = (data: Employee[], sort: string) => {
    const sortedEmployees = useMemo(() => {
        if (sort) {
            return [...data].sort((employee1, employee2) => {
                switch (sort) {
                    case 'birthday':
                        const date1 = new Date(employee1[sort]);
                        const date2 = new Date(employee2[sort]);
                        return date2.valueOf() - date1.valueOf();
                    default:
                        return employee1[sort as keyof typeof employee1].localeCompare(employee2[sort as keyof typeof employee2]);
                }
            });
        } else {
            return data;
        }
    }, [sort, data])

    return sortedEmployees;
}

export const useEmployees = (data: Employee[], sort: string, query: string) => {
    const sortedEmployees = useSortedEmployees(data, sort);

    const sortedAndSearchedEmployees = useMemo(() => {
        return sortedEmployees.filter(person => {
            const { firstName, lastName, userTag } = person;
            return firstName.toLowerCase().includes(query.toLowerCase()) || lastName.toLowerCase().includes(query.toLowerCase()) || userTag.toLowerCase().includes(query.toLowerCase());
        })
    }, [query, sortedEmployees])

    return sortedAndSearchedEmployees;
}
