import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  title : any;
  weather : any;
  constructor(private http: HttpClient) {
    this.title = {name :"Andriy"};
  }

  ngOnInit(): void {
      this.http.get("/api/weatherForecast").subscribe(res => {
        this.weather = res;
      });
  }
}
