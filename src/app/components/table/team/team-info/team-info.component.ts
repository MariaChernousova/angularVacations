import { Component, Input } from '@angular/core';

@Component({
  selector: 'table-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent {

  constructor() { }

  @Input()
  teamName: string;

  @Input()
  countMembers: number;

  @Input()
  percentageOfAbsent: number;

}
