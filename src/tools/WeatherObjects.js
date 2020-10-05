const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const currentWeatherObj = (cityID = '', cityName = '', countryName = '', temp = '', weatherIcon = '', weatherText = '', inFavorites = false) => {
    return {
        cityID,
        cityName,
        countryName,
        temp,
        weatherIcon: `../icons/${weatherIcon}.svg`,
        weatherText,
        inFavorites
    }
}
export const dayForecastObj = (key, day = '', minTemp = '', maxTemp = '', weatherIcon = '') => {
    return {
        key,
        day: DAYS[day],
        minTemp,
        maxTemp,
        weatherIcon: `../icons/${weatherIcon}.svg`
    }
}
export const favoritesObj = (key, temp = '', cityName = '', weatherIcon = '') => {
    return {
        key,
        temp,
        cityName,
        weatherIcon: `../icons/${weatherIcon}.svg`
    }
}