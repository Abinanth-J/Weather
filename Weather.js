const apiKey= "e6904bb84e3a79eb71435501fd994dbe"
const searchBox= document.querySelector('.search input');
const searchBtn= document.querySelector('.search button');
const weatherIcon= document.querySelector('.weather-icon');

const apiUrl= "https://api.openweathermap.org/data/2.5/weather?appid="+apiKey+"&q="

//"https://api.openweathermap.org/data/2.5/weather?q=dindigul&appid=e6904bb84e3a79eb71435501fd994dbe"


async function checkWeather(city){
    const response = await fetch(apiUrl + city)
    var data= await response.json()

    const iconId = (data["weather"][0]["icon"]).slice(0, -1) + "n";
    console.log(iconId);
    console.log(data);
    let icon="http://openweathermap.org/img/wn/" + iconId + "@2x.png";
    const img = `<img src="${icon}" height=125 widht=125 >`;

    document.querySelector('.weather').style.display="flex";
    let description=data["weather"][0]["description"];

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp-273.15)+"°c"+"<br>"+img+"<p><h6>"+description+"</h6></p>";
    document.querySelector('.humidity').innerHTML = data.main.humidity+"%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})