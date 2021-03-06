import { Component, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../../services/date/date.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  constructor(public dateService: DateService) {}

  @Output()
  onPrevMonth: EventEmitter<Date> = new EventEmitter<Date>();

  @Output()
  onNextMonth: EventEmitter<Date> = new EventEmitter<Date>();

  navDate: Date;
  subscription: Subscription;

  prevMonth() {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() - 1, 1));
    this.onPrevMonth.emit(this.navDate);
  }
  
  nextMonth() {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() + 1, 1));
    this.onNextMonth.emit(this.navDate);
  }

  ngOnInit() {
    this.subscription = this.dateService.currentDate.subscribe({
      next: (date) => (this.navDate = date),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}