import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '@components/landing/landing.component';
import { LoginComponent } from '@components/login/login.component';
import { UserItemComponent } from '@components/user-item/user-item.component';
import { UserListComponent } from '@components/user-list/user-list.component';
import { WeatherForecastComponent } from '@components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  {
    path: "weather-forecast",
    component: WeatherForecastComponent
  }, 
  {
    path: "users/:id",
    component: UserItemComponent
  },
  {
    path: "users",
    component: UserListComponent,
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: LandingComponent    
  },
  {
    path: '**',
    redirectTo: '/'    
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
