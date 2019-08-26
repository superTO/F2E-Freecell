import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public break = 0;
  public session = 0;

  constructor() {}

  public add(value: number) {
    return ++value;
  }

  public subtract(value: number) {
    return --value;
  }
  ngOnInit() {
  }

}
