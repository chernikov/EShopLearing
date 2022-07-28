import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastComponent } from '@components/weather-forecast/weather-forecast.component';

const routes: Routes = [{
  path: "weather-forecast",
  component: WeatherForecastComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
