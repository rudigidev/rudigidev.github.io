import country from './data.js';

const displayCountry = (data) => {
    const select = document.getElementById('inputGroupSelect04')
    for(let i = 0; i < data.length; i++) {
        const opt = `<option value="${data[i].name}">${data[i].name}
        </option>`
        select.innerHTML += opt
    }
}

displayCountry(country);

export default displayCountry;