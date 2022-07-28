import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from '@models/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  obj : any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
      this.http.get("/api/weatherForecast").subscribe(res => {
        this.obj = res;
      })
  }

}
