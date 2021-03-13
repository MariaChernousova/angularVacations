import { Component, OnInit } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Request } from 'src/app/services/request.service';
import { TeamTypes } from 'src/app/dataTypes/teamTypes';
import { UserTypes } from 'src/app/dataTypes/userTypes';
import { VacationTypes } from 'src/app/dataTypes/vacationsTypes';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalRef: BsModalRef;
  modalWindow: FormGroup;
  modalForm;
  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public bsModalRef: BsModalRef,
    private readonly request: Request
    ) {
    }

    public teamsData: TeamTypes[];
  public usersData: UserTypes[];
  public subscription: Subscription;
  public dateFrom: Date;
  public dateTo: Date;
  public daysCounter: number = 0;
  public teamId: number;
  public userId: number;
  public vacationType: string;
  public disableButton: boolean = true;

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
      console.log('Date from ' + this.dateFrom);
    } else if (event.target.classList.contains('date-to')) {
      this.dateTo = event.target.value;
      console.log('Date to ' + this.dateTo);
    }
    if(this.dateFrom && this.dateTo){
      let difference: number = (Number(new Date(this.dateTo)) - Number(new Date(this.dateFrom))) / (1000 * 3600 * 24) + 1;
      console.log('difference ' + difference);
      this.daysCounter = difference;
      this.modalWindow.get('teamsData').enable();
      this.modalWindow.get('usersData').enable();

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
      console.log('usersData ' + this.usersData);
    }
  }

  userInputHandler(event){
    if (event.target.classList.contains('user')) {
      this.userId = event.target.value;
      console.log('usersData ' + this.userId);
      this.modalWindow.get('vacationsData').enable();

    }
  }
  vacationInputHandler(event){
    if (event.target.classList.contains('vacation')) {
      this.vacationType = event.target.value;

      console.log('vacationType ' + this.vacationType);
      this.disableButton = false;
    }
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
    this.initModalWindow();
  }

 
  closeWindow() {
    // this.triggerEvent(form.value.name);
    this.bsModalRef.hide();
  }
}