import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DateService } from './services/date.service';
import { Request } from './services/request.service';
// import { User } from './services/user.service';
// import { Team } from './services/team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly dateService: DateService,
    private readonly request: Request,
    ) 
    {}


  currentDate: Date;
  subscription: Subscription;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dateService.currentDate.subscribe({
      next: (date) => (this.currentDate = date),
    });
  }
}
