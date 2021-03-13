import { Component, EventEmitter, OnInit } from '@angular/core';
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
  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly request: Request,
    public datepipe: DatePipe
    ) {
    }

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
      console.log(this.dateFrom);
      
      this.dateFromString = `${this.datepipe.transform(this.dateFrom, 'dd.MM.yyyy')}`;
      console.log(this.dateFromString);
    } else if (event.target.classList.contains('date-to')) {
      this.dateTo = event.target.value;
      console.log('Date to ' + this.dateTo);
      this.dateToString = `${this.datepipe.transform(this.dateTo, 'dd.MM.yyyy')}`;
      console.log(this.dateToString);

    }
    if(this.dateFrom && this.dateTo){
      let difference: number = (Number(new Date(this.dateTo)) - Number(new Date(this.dateFrom))) / (1000 * 3600 * 24) + 1;
      console.log('difference ' + difference);
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
      console.log('teamsData ' + this.teamId);
      this.usersData = this.teamsData[this.teamId-1].members;
      console.log(this.usersData);
      this.modalWindow.get('usersData').enable();

    }
  }

  userInputHandler(event){
    if (event.target.classList.contains('user')) {
      this.userId = event.target.value;
      console.log('usersData ' + this.userId);
      this.modalWindow.get('vacationsData').enable();
      console.log(this.teamsData[this.teamId-1].members[this.userId-1].vacations);

    }
  }
  vacationInputHandler(event){
    if (event.target.classList.contains('vacation')) {
      this.vacationType = event.target.value;

      console.log('vacationType ' + this.vacationType);
      this.disableButton = false;
    }
  }

  saveVacations(){
    this.vacationData = {startDate: this.dateFromString, endDate: this.dateToString, type: this.vacationType}
    this.teamsData[this.teamId-1].members[this.userId-1].vacations.push(this.vacationData);
    console.log(this.teamsData[this.teamId-1].members[this.userId-1].vacations);
    this.triggerEvent(this.teamsData);
    console.log(this.teamsData)
    this.bsModalRef.hide();
  }

  triggerEvent(item) {
    this.event.emit({ data: item });
  }
  
  // dateValidation(){
  //   if(this.dateFrom > this.dateTo){
  //     (document.querySelector('.date-from') as HTMLElement).style.backgroundColor = 'red';
  //     (document.querySelector('.date-to') as HTMLElement).style.backgroundColor = 'red';
  //     this.daysCounter = 0;
  //     this.modalWindow.get('teamsData').disable();
  //     this.modalWindow.get('usersData').disable();
  //     this.modalWindow.get('vacationsData').disable();
  //   } else {
  //     (document.querySelector('.date-from') as HTMLElement).style.backgroundColor = '#fff';
  //     (document.querySelector('.date-to') as HTMLElement).style.backgroundColor = '#fff';
  //     this.modalWindow.get('teamsData').enable();
  //     this.modalWindow.get('usersData').enable();
  //     this.modalWindow.get('vacationsData').disable();

  //   }
  // }



  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
  ngOnInit(): void{
    this.subscription = this.request.getTeams().subscribe(teams => {
      this.teamsData = teams;
      console.log(this.teamsData);
    }) 
    // console.log(this.request.getTeams());

    this.initModalWindow();
  }

 
  closeWindow() {
    // this.triggerEvent(form.value.name);
    this.bsModalRef.hide();
  }
}