export const kelvinToCelsius = (kelvin: number) => {
    return Math.round(kelvin - 273.15);
}
export const windspeedchange = (wind: number) => {
    const kmPerHour = wind*3.6;
    return Number(kmPerHour.toFixed(1));
}
export const kelvinToF = (kelvin: number) => {
    return Math.round((kelvin - 273.15)*1.8+32);
}