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
   public countTime: moment.Moment;
   public isBreak = new BehaviorSubject<boolean>(false);
   public isStart = false;
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
    temp === 60 ? temp = 60 : value.next(++temp);
  }

  public subtract(value: BehaviorSubject<number>): void {
    let temp = value.getValue();
    temp === 1 ? temp = 1 : value.next(--temp);
  }

  public settime(): void {
    this.isStart = true;
    const start = moment().hours(0).minutes(this.session.getValue()).seconds(0);
    const end = moment().hours(0).minutes(this.break.getValue()).seconds(0);

    this.countTime = start;
    this.timer.subscribe(() => {
      this.countTime.subtract(1, 's');
      console.log(this.countTime.format('mm:ss'));
      if (this.countTime.format('mm:ss') === '00:00') {
        if (this.isBreak.getValue()) {
          this.countTime = start;
          this.isBreak.next(false);
        } else {
          this.countTime = end;
          this.isBreak.next(true);
        }
      }
    });

  }

  public cancel(): void {
    this.isStart = false;
  }

  ngOnInit() {
  }


}
