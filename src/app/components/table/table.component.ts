import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';
// import { Team } from 'src/app/services/team.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

  constructor(
    private readonly dateService: DateService,
    // private readonly teamService: Team,
  ) {
  }

  public monthDays: Date[] = [];
  public teams: TeamTypes[];  
  public subscription: Subscription;


  @Input()
  date: Date;

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(){
    this.monthDays = this.dateService.getMonthDays(this.date); 
    // this.subscription = this.teamService.teams.subscribe({
    //   next: (data) => (this.teams = data),
    // });  
    console.log(this.teams);
  }

  ngDoCheck(){
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

}
