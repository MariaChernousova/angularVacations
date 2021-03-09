import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';
import { Request } from 'src/app/services/request.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

  constructor(
    private readonly dateService: DateService,
    private readonly request: Request
  ) {
  }

  public monthDays: Date[] = [];
  public subscription: Subscription;
  public teamsData: TeamTypes[];

  @Input()
  date: Date;

  isWeekend(date: Date): boolean{
    return this.dateService.isWeekend(date);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void{
    this.monthDays = this.dateService.getMonthDays(this.date); 
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
    }) 
  }

  ngOnChanges(): void{
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

}
