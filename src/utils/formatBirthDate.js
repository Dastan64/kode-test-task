export const formatBirthDate = (date, type) => {
    const dateObj = new Date(date);
    const monthsArray = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const year = dateObj.getFullYear();
    const monthDay = dateObj.getDate();
    const month = dateObj.getMonth();
    return type === "shortened" ? `${monthDay} ${monthsArray[month].slice(0, 3)}` : `${monthDay} ${monthsArray[month]} ${year} года`;
}
