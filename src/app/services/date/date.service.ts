import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateService {

  public currentDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(
    new Date()
  );

  setCurrentDate(date: Date): void {
    this.currentDate.next(date);
  }
}