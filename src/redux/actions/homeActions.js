export const updateCurrentWeatherAction = (payload) => {
    return {
        type: 'UPDATE_CURRENT_WEATHER',
        payload
    }
}
export const updateNext5DaysWeatherAction = (payload) => {
    return {
        type: 'UPDATE_NEXT_5_DAYS_WEATHER',
        payload
    }
}
export const updateFavoritesWeatherAction = (payload) => {
    return {
        type: 'UPDATE_FAVORITES_WEATHER',
        payload
    }
}
export const addToFavorites = (payload) => {
    return {
        type: 'ADD_TO_FAVORITES',
        payload
    }
}
export const removeFromFavorites = (payload) => {
    return {
        type: 'REMOVE_FROM_FAVORITES',
        payload
    }
}
export const updateDarkMode = (payload) => {
    return {
        type: 'UPDATE_DARK_MODE',
        payload
    }
}
export const fetchFailed = () =>{
    return{
        type: 'FETCH_FAILED',
    }

}