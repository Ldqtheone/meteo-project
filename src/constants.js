const API_KEY = "fdf81dbac6b7b0e2d531f26f7172eb2d";
const CURRENT_WEATHER_CITY = `https://api.openweathermap.org/data/2.5/weather?lang=FR&appid=${API_KEY}`;
const CURRENT_WEATHER_UV = `http://api.openweathermap.org/data/2.5/uvi?lang=FR&appid=${API_KEY}`;
const CURRENT_WEATHER_FORECAST = `http://api.openweathermap.org/data/2.5/forecast/lang=FR&hourly?appid=${API_KEY}`;

export {API_KEY, CURRENT_WEATHER_CITY, CURRENT_WEATHER_UV, CURRENT_WEATHER_FORECAST};