import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';


@Component({
  selector: 'table-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private readonly dateService: DateService,
  ) {}

  @Input()
  teamData: TeamTypes;

  public cellDays: number[];
  public countDaysInMonth: number;
  public monthNumber: number;
  public subscription : Subscription;
  public date: Date;

  ngOnInit(): void {
    this.subscription = this.dateService.currentDate.subscribe({
      next: (date) => (this.date = date),
    });
    this.countDaysInMonth = this.dateService.getDaysInMonth(this.date);
    this.monthNumber = this.date.getMonth();
    this.cellDays = new Array(this.countDaysInMonth);    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(){
    this.countDaysInMonth = this.dateService.getDaysInMonth(this.date);
    this.monthNumber = this.date.getMonth();
    this.cellDays = new Array(this.countDaysInMonth);
  }

}
