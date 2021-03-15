import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Request } from 'src/app/services/request.service';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { UserTypes } from 'src/app/dataTypes/userTypes';
import { VacationTypes } from 'src/app/dataTypes/vacationsTypes';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { departmentTeams} from '../../teamData/teamData'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalRef: BsModalRef;
  modalWindow: FormGroup;
  modalForm;
  public event: EventEmitter<any> = new EventEmitter();
  constructor (
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    @Inject(BsModalRef) public bsModalRef,
    private readonly request: Request,
    public datePipe: DatePipe
    ) {}

  public teamsData: TeamTypes[];
  public usersData: UserTypes[];
  public vacationData: VacationTypes;
  public subscription: Subscription;
  public dateFrom: Date;
  public dateTo: Date;
  public daysCounter: number = 0;
  public teamId: number;
  public userId: number;
  public vacationType: string;
  public disableButton: boolean = true;
  public dateFromString: string = '01.03.2021';
  public dateToString: string = '01.03.2021';



  initModalWindow(): void{
    this.modalWindow = new FormGroup({
      dateFrom: new FormControl({value:'', disabled: false}, Validators.required),
      dateTo: new FormControl({value:'', disabled: false}, Validators.required),
      teamsData: new FormControl({value:null, disabled: true}, Validators.required),
      usersData: new FormControl({value:null, disabled: true}, Validators.required),
      vacationsData: new FormControl({value:null, disabled: true}, Validators.required),
    })
  }

  dateInputHandler(event){
    if (event.target.classList.contains('date-from')) {
      this.dateFrom = event.target.value;
      this.dateFromString = `${this.datePipe.transform(this.dateFrom, 'dd.MM.yyyy')}`;
    } else if (event.target.classList.contains('date-to')) {
      this.dateTo = event.target.value;
      this.dateToString = `${this.datePipe.transform(this.dateTo, 'dd.MM.yyyy')}`;
    }
    if(this.dateFrom && this.dateTo){
      let difference: number = (Number(new Date(this.dateTo)) - Number(new Date(this.dateFrom))) / (1000 * 3600 * 24) + 1;
      this.daysCounter = difference;
      this.modalWindow.get('teamsData').enable();
    }
    if(this.dateFrom > this.dateTo){
      (document.querySelector('.date-from') as HTMLElement).style.backgroundColor = 'rgba(228, 18, 18, 0.5)';
      (document.querySelector('.date-to') as HTMLElement).style.backgroundColor = 'rgba(228, 18, 18, 0.5)';
      this.daysCounter = 0;
      this.modalWindow.get('teamsData').disable();
      this.modalWindow.get('usersData').disable();
      this.modalWindow.get('vacationsData').disable();
    } else {
          (document.querySelector('.date-from') as HTMLElement).style.backgroundColor = '#fff';
          (document.querySelector('.date-to') as HTMLElement).style.backgroundColor = '#fff';    
        }
  }

  teamInputHandler(event){
    if (event.target.classList.contains('team')) {
      this.teamId = event.target.value;
      this.usersData = this.teamsData[this.teamId-1].members;
      this.modalWindow.get('usersData').enable();
    }
  }

  userInputHandler(event){
    if (event.target.classList.contains('user')) {
      this.userId = event.target.value;
      this.modalWindow.get('vacationsData').enable();
    }
  }
  vacationInputHandler(event){
    if (event.target.classList.contains('vacation')) {
      this.vacationType = event.target.value;
      this.disableButton = false;
    }
  }

  saveVacations(){
    this.vacationData = {startDate: this.dateFromString, endDate: this.dateToString, type: this.vacationType}
    departmentTeams.teams[this.teamId-1].members[this.userId-1].vacations.push(this.vacationData);
    this.teamsData[this.teamId-1].members[this.userId-1].vacations.push(this.vacationData);
    this.triggerEvent(this.teamsData);
    this.bsModalRef.hide();
  }

  triggerEvent(item) {
    this.event.emit({ data: item });
  }
  
  ngOnDestroy(): void {
  }
  
  ngOnInit(): void{
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
    }) 
    this.initModalWindow();
  }

 
  closeWindow() {
    this.bsModalRef.hide();
  }
}