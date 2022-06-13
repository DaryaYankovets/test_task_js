const getLSData = (value) => {
    return JSON.parse(localStorage.getItem(value));
}

const setLSData = (value, data) => {
    localStorage.setItem(value, JSON.stringify(data));
    return false;
}

export { getLSData, setLSData };