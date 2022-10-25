import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AppState, getError, getErrorMessage } from 'src/app/state/app.selector';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  error$ : Observable<"yes" | "no"> = of("no");
  errorMessage$ : Observable<string> = of("");

  ngOnInit(): void 
  {
    this.error$ = this.store.pipe(select(getError));
    this.errorMessage$ = this.store.pipe(select(getErrorMessage));
  }

}
