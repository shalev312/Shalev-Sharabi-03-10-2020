const key = 'YlA06A7DlBKdqgiM92QPTF3Nf8LJeio8';

export const getWeather = async (id) => {
    const base = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];
};

export const getNext5DaysForecast = async (id) => {
    const base = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/'
    const query = `${id}?apikey=${key}&metric=true`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data;

};

export const getCity = async (city) => {
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();
    return data[0];

};
