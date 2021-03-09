import { Component, Input } from '@angular/core';
import { UserTypes } from 'src/app/dataTypes/userTypes';

@Component({
  selector: 'team-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  constructor() { }

  @Input()
  cellDays: number[];

  @Input()
  memberData: UserTypes;
  
}
