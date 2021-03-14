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
    // private readonly vacationService: VacationService,
    public  dayPersonStats: DayPersonStats

  ) {
  }

  public monthDays: Date[] = [];
  public subscription: Subscription;
  public subscriptionVacation: Subscription;
  public event: EventEmitter<any> = new EventEmitter();

  public teamsData: TeamTypes[];
  public bsModalRef: BsModalRef;
  public dayPersonsVacation: number[] = new Array();

  @Input()
  date: Date;
  
  ngOnDestroy(): void {
  }
  
  ngOnInit(): void{
    this.monthDays = this.dateService.getMonthDays(this.date); 
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
    }) 
    // this.subscriptionVacation = this.dayPersonStats.dayPersonStats.subscribe({
    //   next: (date) => (this.dayPersonsVacation = date),
    // });
  }
  openModalWithComponent() {
    
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close'; 
    this.subscription = this.bsModalRef.content.event.subscribe(res => {
      this.teamsData = res.data;
      console.log(this.teamsData);
   });
  }
  
  ngOnChanges(): void{
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

}
