import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherForecastComponent } from '@components/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserService } from '@services/user.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { CounterComponent } from './components/counter/counter.component';
import { Counter2Component } from './components/counter2/counter2.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatherForecastComponent,
    UserListComponent,
    UserItemComponent,
    CounterComponent,
    Counter2Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({app : AppReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
