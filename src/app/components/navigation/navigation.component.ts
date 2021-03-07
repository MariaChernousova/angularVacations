import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../../services/date/request.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  constructor(public dateService: DateService) {}

  navDate: Date;
  subscription: Subscription;

  prevMonth() {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() - 1, 1));
  }
  nextMonth() {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() + 1, 1));
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