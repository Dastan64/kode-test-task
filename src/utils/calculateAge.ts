export const calculateAge = (date: string) => {
    const dateObj = new Date(date);
    const currentYear = new Date().getFullYear();
    const year = dateObj.getFullYear();
    return currentYear - year;
}
