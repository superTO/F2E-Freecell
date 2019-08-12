import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pomodoro-Clock';
  public break = 0;
  public session = 0;

  constructor() {}

  public add(value: number) {
    return ++value;
  }

  public subtract(value: number){
    return --value;
  }

}
