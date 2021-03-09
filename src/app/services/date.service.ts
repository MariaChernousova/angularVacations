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

  public getMonthDays(date: Date): Date[] {
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = new Array(this.getDaysInMonth(date));    
    
    days.fill("day");
    return days.map((day, index) => {
      return new Date(year, month, index + 1)
    })
  }

  public getDaysInMonth(date : Date) : number {
    const month = date.getMonth();
    const year = date.getFullYear();
    return new Date(year, month + 1, 0).getDate();
  }

}