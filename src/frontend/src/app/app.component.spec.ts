import { AppState, Calculate } from './app.state';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxsModule, Store } from '@ngxs/store';

describe('AppComponent', () => {
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [NgxsModule.forRoot([AppState])]
    }).compileComponents();
    store = TestBed.inject(Store);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('frontend');
  });
  it('should add two numbers', () => {
    store.dispatch(new Calculate(1, 1, '+'));

    const result = store.selectSnapshot(AppState.result);
    expect(result).toEqual(2);
  });
  it('should multiply two numbers', () => {
    store.dispatch(new Calculate(1, 1, '*'));

    const result = store.selectSnapshot(AppState.result);
    expect(result).toEqual(1);
  });
  it('should divide two numbers', () => {
    store.dispatch(new Calculate(1, 1, '/'));

    const result = store.selectSnapshot(AppState.result);
    expect(result).toEqual(1);
  });
  it('should substract two numbers', () => {
    store.dispatch(new Calculate(1, 1, '-'));

    const result = store.selectSnapshot(AppState.result);
    expect(result).toEqual(0);
  });
  it('should be zero', () => {
    expect(store.selectSnapshot(AppState.result)).toEqual(0);
  });
});
