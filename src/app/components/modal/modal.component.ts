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
  // public vacationsData: VacationTypes[];
  public subscription: Subscription;
  public dateFrom: Date;
  public dateTo: Date;
  public daysCounter: number = 0;
  public teamId: number;
  public userId: number;
  public vacationType: string;

  initModalWindow(): void{
    this.modalWindow = new FormGroup({
      dateFrom: new FormControl({value:'11.03.2021', disabled: false}, [Validators.required, Validators.pattern('[1-9]./')]),
      dateTo: new FormControl({value:'15.03.2021', disabled: true}, [Validators.required, Validators.pattern('[1-9]./')]),
      teamsData: new FormControl({value:'', disabled: false}),
      usersData: new FormControl({value:'User Name', disabled: true}),
      vacationsData: new FormControl({value:'Vacations type', disabled: true}),


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
    }
  }
  vacationInputHandler(event){
    if (event.target.classList.contains('vacation')) {
      this.vacationType = event.target.value;

      console.log('vacationType ' + this.vacationType);
    }
  }



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