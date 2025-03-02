{/* <i class="fas fa-sun"></i>  <!-- Sunny -->
<i class="fas fa-cloud"></i>  <!-- Cloudy -->
<i class="fas fa-cloud-showers-heavy"></i>  <!-- Rainy -->
<i class="fas fa-bolt"></i>  <!-- Thunderstorm -->
<i class="fas fa-snowflake"></i>  <!-- Snowy -->
<i class="fas fa-smog"></i>  <!-- Foggy -->
*/}
const api_url = `https://api.openweathermap.org/data/2.5/weather?units=metric`;
const api_key = "bd5e378503939ddaee76f12ad7a97608";
const main = document.getElementById('main');
async function checkWeather(city) {
    const response = await fetch(api_url + `&q=${city}&appid=${api_key}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = data.main.temp + "&deg;C";
    document.getElementById('humidity').innerHTML = data.main.humidity+"%";
    document.getElementById('windspeed').innerHTML = data.wind.speed+" KMPH";
    main.class = '';
    mai = data.weather[0].main;
    if( mai== 'Clear'){
       main.className = 'fa fa-sun';
    }
    else if(mai == 'Clouds')
    {
        main.className = 'fa fa-cloud';
    }
    else if(mai == 'Rain')
        {
            main.className = 'fas fa-cloud-showers-heavy';
        }
        else if(mai == 'Drizzle')
            {
                main.className = 'fas fa-cloud-rain';
            }
        else if (mai == 'Mist'){
            main.className =   'fas fa-smog';
        }
        
}

document.getElementById('submit').addEventListener('click',()=>{
    document.querySelector('.weather').style.display = 'flex';
    const city = document.getElementById('city').value;
    checkWeather(city);
    document.getElementById('city').value = '';
})