import { Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  constructor(public dateService: DateService) {}

  public navDate: Date;
  public subscription: Subscription;

  prevMonth(): void {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() - 1, 1));
  }

  nextMonth(): void {
    this.dateService.setCurrentDate(new Date(this.navDate.getFullYear(),this.navDate.getMonth() + 1, 1));
  }

  ngOnInit(): void {
    this.subscription = this.dateService.currentDate.subscribe({
      next: (date) => (this.navDate = date),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}