import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './iapp-state';
import { INCREMENT } from '../actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {
  @select('Counter') count;
  @select(['Message','NewMessages']) NewMessages;
  @select((s:IAppState)=>s.Message.NewMessages) NewMessages1;
  constructor(private ngRedux: NgRedux<IAppState>) {
   /*  this.ngRedux.subscribe(() =>

      this.counter = ngRedux.getState().Counter); */
  }

  ngOnInit() {
  }
  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
