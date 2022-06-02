import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';

export class Calculate {
  static readonly type = '[App] Calculate';
  constructor(public firstVal: number, public secondVal: number, public operation: string) {}
}

export interface AppStateModel {
  result: number;
}

@State<AppStateModel>({
  name: 'App',
  defaults: {
    result: 0
  }
})
@Injectable()
export class AppState {

  @Selector()
  public static result(state: AppStateModel): number {
    return state.result;
  }

  @Action(Calculate)
  calculate(ctx: StateContext<AppStateModel>, {firstVal, secondVal, operation} : Calculate) {
    const state = ctx.getState();
    let rsl = 0;
    switch(operation){
      case "+":
        rsl = firstVal + secondVal
        break;
      case "-":
        rsl = firstVal - secondVal
        break;
      case "/":
        rsl = firstVal / secondVal
        break;
      case "*":
        rsl = firstVal * secondVal
        break;
    }
    ctx.setState({
      ...state,
      result: rsl
    });
  }
}
