async function loadJSON() {
    const response = await fetch('../data/employees.json');
    let data = await response.json()

    return data;
};