const apiKey = "01d7e47cb56c62ef40878dc18b1ac708";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + apiKey + "&q=" + city);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
document.addEventListener("keypress",function(event){
    if(event.which == 13||event.which==32) {
        checkWeather(searchBox.value)
      }
})