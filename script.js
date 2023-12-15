//BALLS
function colorBall1(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByClassName("ball1")[0].style.backgroundColor = b;
    document.getElementsByClassName("ball1")[1].style.backgroundColor = b;
    document.getElementsByClassName("ball1")[2].style.backgroundColor = b;
}

function colorBall2(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByClassName("ball2")[0].style.backgroundColor = b;
    document.getElementsByClassName("ball2")[1].style.backgroundColor = b;
    document.getElementsByClassName("ball2")[2].style.backgroundColor = b;
}

//LIGHTS
function colorLight1(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByClassName("light1")[0].style.backgroundColor = b;
    document.getElementsByClassName("light1")[1].style.backgroundColor = b;
    document.getElementsByClassName("light1")[2].style.backgroundColor = b;
    document.getElementsByClassName("light1")[3].style.backgroundColor = b;
}

function colorLight2(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByClassName("light2")[0].style.backgroundColor = b;
    document.getElementsByClassName("light2")[1].style.backgroundColor = b;
    document.getElementsByClassName("light2")[2].style.backgroundColor = b;
    document.getElementsByClassName("light2")[3].style.backgroundColor = b;
}

function colorLight3(z) {
    let a = getComputedStyle(z);
    let b = a.backgroundColor;
    document.getElementsByClassName("light3")[0].style.backgroundColor = b;
    document.getElementsByClassName("light3")[1].style.backgroundColor = b;
    document.getElementsByClassName("light3")[2].style.backgroundColor = b;
    document.getElementsByClassName("light3")[3].style.backgroundColor = b;
}

//WEATHER API
document.addEventListener('DOMContentLoaded', function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather, handleLocationError);
    } else {
        document.getElementById('weather-info').innerText = 'Geolocation is not supported by this browser.';
    }
});

function getWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = '544e5c464e9877620ea1ab4280f82a85';

    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.weather[0].description;


            const weatherInfo = `Weather: ${weatherDescription}`;
            document.getElementById('weather-info').innerHTML = weatherInfo;

            /*
            document.addEventListener(function() {
            const snowContainer = document.getElementsByClassName('snow-container');

            if (`${weatherDescription}` = 'snow') {
                snowContainer.style.display = 'block';
            } else {
                snowContainer.style.display = 'none';
            }})*/
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-info').innerText = 'Unable to fetch weather data.';
        });
}
function handleLocationError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById('weather-info').innerText = 'You denied access to your location.';
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById('weather-info').innerText = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            document.getElementById('weather-info').innerText = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById('weather-info').innerText = 'An unknown error occurred.';
            break;
    }
}