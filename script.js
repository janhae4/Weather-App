document.addEventListener('DOMContentLoaded', () => {
    const API = 'bcca89ed677b7cbcc72d9921b2f60869';
    const searchBtn = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    const weatherIcon = document.querySelector('.weather-status.icon');
    const weatherStatus = document.querySelector('.weather-status.info');
    const humidity = document.querySelector('.weather-status.extra .humid');
    const wind = document.querySelector('.weather-status.extra .wind');
    const city = document.querySelector('.weather-status .city');
    const degree = document.querySelector('.weather-status .degree');

    const icon = {
        '01d': '☀️',
        '01n': '🌙',
        '02d': '🌤️',
        '02n': '🌤️',
        '03d': '☁️',
        '03n': '☁️',
        '04d': '☁️',
        '04n': '☁️',
        '09d': '🌧️',
        '09n': '🌧️',
        '10d': '🌦️',
        '10n': '🌦️',
        '11d': '⛈️',
        '11n': '⛈️',
        '13d': '🌨️',
        '13n': '🌨️',
        '50d': '🌫️',
        '50n': '🌫️',
    }

    searchBtn.addEventListener('click', () => {
        const title = document.querySelector('h1.title');
        const cityValue = searchInput.value;
        console.log(cityValue);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API}&units=metric`;
        fetch(url)
        .then(res => {
            if (!res.ok) {
                alert('City not found');
                throw Error('City not found');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            city.textContent = data.name;
            degree.textContent = data.main.temp + '°C';
            humidity.querySelector('span p').textContent = data.main.humidity + '%';
            wind.querySelector('span p').textContent = data.wind.speed + 'km/h';
            weatherIcon.textContent = icon[data.weather[0].icon];

            title.classList.remove('on');
            searchInput.classList.remove('on');
            weatherIcon.classList.remove('close');
            weatherStatus.classList.remove('close');
            humidity.classList.remove('close');
            wind.classList.remove('close');
        })
        .catch(err => {
                console.log(err);
        })

    })
})