document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '20586a3d00feed78e165b66e47692b84'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    
    function fetchWeather(city) {
        const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`;
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
                return response.json();
            })
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                displayError(error.message);
            });
    }
    
    function displayWeather(data) {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    }
    
    function displayError(message) {
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = message;
    }
    
   
    fetchWeather('Wroclaw');
});
