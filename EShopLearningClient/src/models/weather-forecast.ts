export class WeatherForecast 
{
    date: string;
    temperatureC : number;
    temperatureF : number;
    summary: string;

    constructor() {
        this.date = "";
        this.temperatureC = 0; 
        this.temperatureF = 0;
        this.summary = "";
    }
}