const API_KEY = `fea1f108bfe2040a9e1f3c3ceff070ff`;
const loadTemperature = city => {
    //const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        //.then(data => displayTemperature(data));
        .then(data => displayTemperature(data));
}

const displayTemperature = data => {
    //const temperature = document.getElementById('temperature');
    //console.log(data.main.temp);
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('conditioon', data.main.temp)
    console.log(data.weather[0].main);
    //temperature.innerText = data.main.temp;
    //console.log(data);
}

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;

}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    //set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);

})

loadTemperature('dhaka');

