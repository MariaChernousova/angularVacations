import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';
import { VacationService } from 'src/app/services/vacation.service';


@Component({
  selector: 'table-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private readonly dateService: DateService,
    private readonly vacationService:VacationService
  ) {}

  @Input()
  teamData: TeamTypes;

  @Input()
  date: Date;

  @Input()
  monthDays: Date[];

  public cellDays: number[];
  public countDaysInMonth: number;
  public monthNumber: number;
  public subscription : Subscription;
  public isTeamHidden:boolean;
  public countVacationDays: number = 0;
  public teamClassName: string;

  ngOnInit(): void {
    this.monthNumber = this.date.getMonth();
    this.teamClassName = this.teamData.name.split(" ")[0].toLowerCase();
    this.isTeamHidden = false;
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  ngOnChanges(): void{
    this.monthNumber = this.date.getMonth();
  }

  hideTeam(isHidden: boolean): void {
    this.isTeamHidden = isHidden;
  }

}
