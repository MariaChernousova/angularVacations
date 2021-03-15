import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';
import { DayPersonStats } from 'src/app/services/dayPersonStats.service';
import { Request } from 'src/app/services/request.service';
import { VacationService } from 'src/app/services/vacation.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit{

  constructor(
    private readonly dateService: DateService,
    private readonly request: Request,
    private modalService: BsModalService,
    public  dayPersonStats: DayPersonStats
  ) {}

  public monthDays: Date[] = [];
  public subscription: Subscription;
  public subscriptionVacation: Subscription;
  public event: EventEmitter<any> = new EventEmitter();

  public teamsData: TeamTypes[];
  public bsModalRef: BsModalRef;
  public countMembers: number;
  public countVacationMembers: number;
  public percentageOfVacationPeople: number;
  
  @Input()
  date: Date;
  
  ngOnDestroy(): void {
  }
  
  ngOnInit(): void{
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
      this.countMembers = this.dayPersonStats.getCountPeople(this.teamsData);
      this.countVacationMembers = this.dayPersonStats.getCountVacationPeople(this.teamsData, this.date);
      this.percentageOfVacationPeople = this.dayPersonStats.getPercentageOfAbsentPeople(this.countMembers, this.countVacationMembers);
    }) 
  }


  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.subscription = this.bsModalRef.content.event.subscribe(res => {
      this.teamsData = res.data;
   });
  }
  
  ngOnChanges(): void{
    this.monthDays = this.dateService.getMonthDays(this.date);
    if(this.teamsData) {
      this.countMembers = this.dayPersonStats.getCountPeople(this.teamsData);
      this.countVacationMembers = this.dayPersonStats.getCountVacationPeople(this.teamsData, this.date);
      this.percentageOfVacationPeople = this.dayPersonStats.getPercentageOfAbsentPeople(this.countMembers, this.countVacationMembers);  
    }
  }
}
