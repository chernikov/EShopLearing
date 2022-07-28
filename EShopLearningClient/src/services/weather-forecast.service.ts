import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';
import { WeatherForecast } from '@models/weather-forecast';

@Injectable({ providedIn: "root" })
export class WeatherForecastService
{
	private apiUrl:string = this.baseHref + '/weatherforecast';

	private headers = new HttpHeaders({
		"content-type": "application/json",
		"Accept": "application/json"
	});
	private options = {
		headers : this.headers
	};

	constructor(private http: HttpClient,
	@Inject(APP_BASE_HREF) private baseHref : string
	) {}

	getAll() : Observable<WeatherForecast[]> {
		return this.http.get<WeatherForecast[]>(this.apiUrl, this.options);
	}
}
