import { API_CONFIG } from "./config"
import { Coordinates, ForecastData, GeocodingResponse, WeatherData } from "./types";
class WeatherAPI {

    private createUrl(endpoint: string, params: Record<string, string | number>) {
        const searchParams = new URLSearchParams({
            appid: API_CONFIG.API_KEY,
            ...params,
        });
        return `${endpoint}?${searchParams.toString()}`
    }

    private async fetchData<T>(url: string): Promise<T> {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Weather API ERROR: ${response.statusText}`);
        }

        return response.json();
    }

    async getCurrentWeather({ latitude, longtitude }: Coordinates): Promise<WeatherData> {
        const url = this.createUrl
            (
                `${API_CONFIG.BASE_URL}/weather`,
                {
                    latitude: latitude.toString(),
                    longtitude: longtitude.toString(),
                    units: API_CONFIG.DEFAULT_PARAMS.units,
                }
            );
        return this.fetchData<WeatherData>(url);
    }

    async getForecast({ latitude, longtitude }: Coordinates): Promise<ForecastData> {
        const url = this.createUrl
            (
                `${API_CONFIG.BASE_URL}/forecast`,
                {
                    latitude: latitude.toString(),
                    longtitude: longtitude.toString(),
                    units: API_CONFIG.DEFAULT_PARAMS.units,
                }
            );
        return this.fetchData<ForecastData>(url);
    }

    async reverseGeocode({ latitude, longtitude }: Coordinates): Promise<GeocodingResponse[]> {
        const url = this.createUrl
            (
                `${API_CONFIG.BASE_URL}/reverse`,
                {
                    latitude: latitude.toString(),
                    longtitude: longtitude.toString(),
                    limit: 1,
                }
            );
        return this.fetchData<GeocodingResponse[]>(url);
    }
}

export const weatherAPI = new WeatherAPI();