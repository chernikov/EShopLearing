import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getNumber, State } from 'src/app/state/app.selector';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {


  public num$: Observable<number> | undefined;
  
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.num$ = this.store.pipe(select(getNumber));
  }

}
