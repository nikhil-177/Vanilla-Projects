
const api =  'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey = '719e5fa3c266003c0835e5f353a25d05';

const searchedCity = document.getElementById('search');
const btn = document.getElementById('btn');
const img = document.getElementById('img');

async function checkWeather(city) {
    const response = await fetch(api + city + `&appid=${apiKey}`);
    let data = await response.json()

    if(response.status == 404){
        document.querySelector(".error").style.display = 'block'
    document.querySelector('.weather-city').style.display = 'none'
    document.querySelector('.extra-info').style.display = 'none'
    }
    else{
    document.querySelector('#name').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('#humidities').innerHTML = data.main.humidity + "%";
    document.querySelector('#wind').innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main == 'Clouds'){
        img.src = "src/cloudy.png"
    }
    else if(data.weather[0].main == 'Clear'){
        img.src = "src/clear.png"
    }
    else if(data.weather[0].main == 'Rain'){
        img.src = "src/rain.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        img.src = "src/drizzle.png"
    }
    else if(data.weather[0].main == 'Snow'){
        img.src = "src/snow.png"
    }

    document.querySelector('.weather-city').style.display = 'block'
    document.querySelector('.extra-info').style.display = 'flex'
 }
}


btn.addEventListener('click', () => {
    checkWeather(searchedCity.value);
    
})
