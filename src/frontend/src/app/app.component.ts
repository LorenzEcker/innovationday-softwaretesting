import { AppState, Calculate } from './app.state';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  firstInput = 0;
  secondInput = 0;
  rs$: Observable<number>;

  constructor(private store: Store) {
    this.rs$ = this.store.select(AppState.result);
  }

  add() {
    this.store.dispatch(new Calculate(this.firstInput, this.secondInput, '+'));
  }

  multiply() {
    this.store.dispatch(new Calculate(this.firstInput, this.secondInput, '*'));
  }

  divide() {
    this.store.dispatch(new Calculate(this.firstInput, this.secondInput, '/'));
  }

  substract() {
    this.store.dispatch(new Calculate(this.firstInput, this.secondInput, '-'));
  }

  evaluate() {

  }
}
