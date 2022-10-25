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
  base: IUser[] = [
    {
      name: 'Parwinder',
      character: 'Calcifer',
    },
    {
      name: 'Laure',
      character: 'Alchemist',
    },
    {
      name: 'Eliu',
      character: 'X-Men',
    }];

  counter : number = 0;

  source$: Observable<IUser> | null = null;

  mapper$: Observable<string> | null = null;

  subject = new Subject<IUser>();

  constructor(private store: Store<State>) { 
    this.source$ = this.subject.pipe();
    
    this.mapper$ = this.source$.pipe(map(({ name }) => name));
  }

  onClick() {
    this.store.dispatch(new LoadUsers());
   /* let item = this.base[this.counter];
    this.subject.next(item);
    this.counter++;*/
  }

  onClick2(str:string) {
    let action = {type : str} as Action;

    console.log(str);
    this.store.dispatch(action);
  }

  
  title = 'EShopLearningClient';
}
