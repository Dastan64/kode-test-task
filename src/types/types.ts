import React, { EventHandler, SyntheticEvent } from "react";

export interface Employee {
    avatarUrl: string;
    firstName: string;
    lastName: string;
    phone: string;
    userTag: string;
    position: string;
    birthday: string;
    id: string;
    department: string;
    [key: string]: any;
}

export interface Filter {
    sort: string;
    query: string;
}

export interface ProfileThumbProps {
    employee: Employee;
    filter: Filter;
}

export interface ProfilesListProps {
    employees: Employee[];
    filter: Filter;
}

export interface SearchBarProps {
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
    filter: Filter;
    setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

export interface PopupProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export interface ErrorProps {
    children: React.ReactNode;
}

export interface Tab {
    title: string;
    slug: string;
    id: number;
}

export interface TabsListProps {
    tabs: Tab[];
    data: Employee[];
    setFiltered: React.Dispatch<React.SetStateAction<Employee[]>>;
}

export interface HomeProps {
    employees: Employee[];
    isPopupOpen: boolean;
    setIsPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
    hasFailed: boolean;
    isLoading: boolean;
}

export interface ProfilePageProps {
    employees: Employee[];
}

export interface RadioButtonProps {
    text: string;
    value: string;
    onChange: (arg1: string) => void;
}

export interface TabButtonProps {
    tab: Tab;
    activeTab: number;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
