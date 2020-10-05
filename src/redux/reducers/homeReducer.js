import { currentWeatherObj, dayForecastObj } from '../../tools/WeatherObjects'
const defaultHomeState = {
    currentWeather: currentWeatherObj(),
    next5DaysForecast: [0, 1, 2, 3, 4].map((item, index) => dayForecastObj(index)),
    favoritesKey: [],
    favoritesDetails: [],
    darkMode: false,
    fetchFailed: false
}
export const homeReducer = (state = defaultHomeState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_WEATHER':
            return {
                ...state,
                currentWeather: {
                    ...action.payload,
                    inFavorites: state.favoritesKey.find(item => item.key === action.payload.cityID)
                }
            }
        case 'UPDATE_NEXT_5_DAYS_WEATHER':
            return {
                ...state,
                next5DaysForecast: action.payload
            }
        case 'UPDATE_FAVORITES_WEATHER':
            return {
                ...state,
                favoritesDetails: action.payload
            }
        case 'ADD_TO_FAVORITES':
            state.favoritesKey.push(action.payload)
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    inFavorites: true
                }
            }
        case 'REMOVE_FROM_FAVORITES':
            return {
                ...state,
                currentWeather: {
                    ...state.currentWeather,
                    inFavorites: false
                },
                favoritesKey: state.favoritesKey.filter(item => item.key !== action.payload)
            }
        case 'UPDATE_DARK_MODE': {
            return {
                ...state,
                darkMode: action.payload
            }
        }
        case 'FETCH_FAILED':
            return {
                ...state,
                fetchFailed: true
            }
        default:
            return state;
    }
}
