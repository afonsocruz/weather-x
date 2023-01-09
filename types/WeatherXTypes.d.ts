export type WeatherData = {
  current: CurrentWeather,
  location: Location,
}

export type CurrentWeather = {
  cloud: number,
  condition: WeatherCondition,
  feelslike_c: number,
  humidity: number,
  temp_c: number,
  wind_dir: string,
  wind_kph: number
}

export type Location = {
  country: string,
  lat: number,
  localtime: string,
  lon: number,
  name: string,
  region: string,
  tz_id: string
}

export type WeatherCondition = {
  code: number,
  icon: string,
  text: string
}