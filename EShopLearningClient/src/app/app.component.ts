import { Component } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { from, Observable, of, Subject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { ActionTypes, LoadUsers } from './state/app.actions';
import { State } from './state/app.selector';

interface IUser {
  name: string;
  character: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  title = 'EShopLearningClient';

  item = "";
  savedItem : string | null = "";
  constructor() { 
  }

  onRead() {
    this.savedItem = localStorage.getItem("eshop_test");
  }

  onSave() {
    localStorage.setItem("eshop_test", this.item);
  }


  
  
}
