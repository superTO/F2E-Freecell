import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, timer, interval } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
   public NowTime = new BehaviorSubject<string>(moment().format('HH:mm:ss'));
  // public timer = timer(1000, 1000);
  // public NowTime = new Date();
  public timer = interval(1000);

  public break = new BehaviorSubject<number>(5);
  public session = new BehaviorSubject<number>(25);

  constructor(public ref: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.NowTime.next(moment().format('HH:mm:ss'));
    // }, 500);
    // this.ref.detectChanges();
    this.timer.subscribe(() => this.NowTime.next(moment().format('HH:mm:ss')));
  }

  public add(value: BehaviorSubject<number>): void {
    let temp = value.getValue();
    value.next(++temp);
  }

  public subtract(value: BehaviorSubject<number>): void {
    let temp = value.getValue();
    temp === 0 ? temp = 0 : value.next(--temp);
  }

  public settime(): void {

  }

  ngOnInit() {
  }


}
