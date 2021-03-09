import { Component, Input, OnInit } from '@angular/core';
import { UserTypes } from 'src/app/dataTypes/userTypes';

@Component({
  selector: 'team-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor() { }

  @Input()
  cellDays: number[];

  @Input()
  memberData: UserTypes;

  ngOnInit(): void {
  }

}
