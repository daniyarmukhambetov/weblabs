import { Component, OnInit } from '@angular/core';
import {Subscription, TimeInterval, timer} from 'rxjs';
import { map, share } from "rxjs/operators";
import { OnDestroy } from '@angular/core'

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {
  get subscription(): Subscription {
    return this._subscription;
  }

  set subscription(value: Subscription) {
    this._subscription = value;
  }
  get intervalId() {
    return this._intervalId;
  }

  set intervalId(value) {
    this._intervalId = value;
  }

  date: Date = new Date();

  constructor() {
  }

  time = new Date();
  rxTime = new Date();
  private _intervalId: any;
  private _subscription: any;

  ngOnInit() {
    // Using Basic Interval
    this._intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this._subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this._intervalId);
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}
