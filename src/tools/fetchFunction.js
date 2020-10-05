import { updateCurrentWeatherAction, updateNext5DaysWeatherAction, updateFavoritesWeatherAction } from '../redux/actions/homeActions';
import { currentWeatherObj, dayForecastObj, favoritesObj } from '../tools/WeatherObjects';
import { getWeather, getNext5DaysForecast, getCity } from './forecast';


export const updateFavoritesWeatherDetails = async (arrFavoritesKey, dispatch) => {

    const favoritesDetailsPromises = arrFavoritesKey.map(async item => {
        const weatherDetails = await getWeather(item.key);
        return favoritesObj(item.key, weatherDetails.Temperature.Metric.Value, item.cityName, weatherDetails.WeatherIcon)
    });

    Promise.all(favoritesDetailsPromises).then((favoritesDetails) => {
        dispatch(updateFavoritesWeatherAction(favoritesDetails));
    })
}

export const updateHomeWeatherDetails = async (cityName, dispatch) => {
    let city
    try{
        city =await getCity(cityName);
    }catch(err){
        return {
            errorMessage: "You have exceeded the 50 free calls!"
        }
    }
    if (!city) {
        return {
            errorMessage: "Please Type a Valid City Name In English!"
        };
    }

    const cityID = city.Key;
    const cityCountry = city.Country.LocalizedName;
    const weatherDetails = await getWeather(cityID);
    const forecast = await getNext5DaysForecast(cityID);

    const currentWeather = currentWeatherObj(
        cityID,
        cityName,
        cityCountry,
        Math.floor(weatherDetails.Temperature.Metric.Value),
        weatherDetails.WeatherIcon,
        weatherDetails.WeatherText);

    const next5DaysForecast = forecast.DailyForecasts.map((item, index) => {
        return dayForecastObj(
            index,
            new Date(item.Date).getDay(),
            Math.floor(item.Temperature.Minimum.Value),
            Math.floor(item.Temperature.Maximum.Value),
            item.Day.Icon
        );
    })
    dispatch(updateCurrentWeatherAction(currentWeather));
    dispatch(updateNext5DaysWeatherAction(next5DaysForecast));
    return false;
}
