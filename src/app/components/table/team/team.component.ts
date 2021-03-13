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

  @Input()
  date: Date;

  @Input()
  monthDays: Date[];

  public cellDays: number[];
  public countDaysInMonth: number;
  public monthNumber: number;
  public subscription : Subscription;
  public isTeamHidden:boolean;

  ngOnInit(): void {
    this.monthNumber = this.date.getMonth();
    this.isTeamHidden = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void{
    this.monthNumber = this.date.getMonth();
  }

  hideTeam(isHidden: boolean): void {
    this.isTeamHidden = isHidden;
  }

}
