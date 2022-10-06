import { Component } from '@angular/core';
import { from, Observable, of, Subject } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

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

  constructor() { 
    this.source$ = this.subject.pipe();
    
    this.mapper$ = this.source$.pipe(map(({ name }) => name));
  }

  onClick() {
    let item = this.base[this.counter];
    this.subject.next(item);
    this.counter++;
  }

  
  title = 'EShopLearningClient';
}
