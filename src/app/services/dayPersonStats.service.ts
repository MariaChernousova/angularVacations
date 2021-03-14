import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DayPersonStats {

  public dayPersonStats: number[] = new Array();

  setDayPersonStats(date: number, index: number): void {
    this.dayPersonStats[index]= date;
  }

  getDayPersonStats(): number[] {
    return this.dayPersonStats;
  }
}