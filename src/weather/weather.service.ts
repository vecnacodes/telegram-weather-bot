import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService implements OnModuleInit {
  private apiKey: string;

  constructor() {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      throw new Error('WEATHER_API_KEY must be defined in the environment variables');
    }
    this.apiKey = apiKey;
  }

  onModuleInit() {
    console.log('WeatherService has been initialized');
  }

  async getWeatherUpdate(city: string): Promise<string> {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          appid: this.apiKey,
          units: 'metric'
        }
      });
      const { main, weather } = response.data;
      return `Current weather in ${city}: ${weather[0].description}. Temperature: ${main.temp}°C`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return 'Unable to fetch weather data at this time.';
    }
  }
}