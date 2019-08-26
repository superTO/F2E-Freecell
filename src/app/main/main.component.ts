import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as moment from 'moment';
import { BehaviorSubject, timer } from 'rxjs';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
   public NowTime = new BehaviorSubject<string>(moment().format('HH:mm:ss'));
   public timer = timer(1000, 1000);
  // public NowTime = new Date();

  public break: number;
  public session: number;

  constructor(public ref: ChangeDetectorRef) {
    // setInterval(() => {
    //   this.NowTime.next(moment().format('HH:mm:ss'));
    // }, 500);
    // this.ref.detectChanges();
    this.timer.subscribe(() => this.NowTime.next(moment().format('HH:mm:ss')));

    this.break = 0;
    this.session = 0;
  }

  public add(value: number): void {
    console.log(value);
    ++value;
    console.log(value);
  }

  public subtract(value: number): void {
    --value;
  }
  ngOnInit() {
  }


}
