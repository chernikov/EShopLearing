import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit {

  @Input('num') num : number | null = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

}
