import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { DateService } from 'src/app/services/date.service';
import { Request } from 'src/app/services/request.service';
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
    private modalService: BsModalService

  ) {
  }

  public monthDays: Date[] = [];
  public subscription: Subscription;
  public teamsData: TeamTypes[];
  public bsModalRef: BsModalRef;

  @Input()
  date: Date;
  


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void{
    this.monthDays = this.dateService.getMonthDays(this.date); 
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
    }) 
  }
  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(ModalComponent);
    this.bsModalRef.content.closeBtnName = 'Close'; 
  }

  ngOnChanges(): void{
    this.monthDays = this.dateService.getMonthDays(this.date);
  }

}
