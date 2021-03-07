import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor() { }

  @Input()
  countDaysInMonth: number;

  cellDays: number[];

  ngOnInit(): void {
    this.cellDays = new Array(this.countDaysInMonth);
  }

  ngOnChanges(){
    this.cellDays = new Array(this.countDaysInMonth);
  }

}