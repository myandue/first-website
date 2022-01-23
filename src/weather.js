function onGeoOk(position){
    const API_KEY = "936d7ab7491431ffedc09cd736f0119a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `Weather : ${data.weather[0].main} / ${data.main.temp}℃\n`;
            city.innerText = `Location : ${data.name}`;
        })
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);