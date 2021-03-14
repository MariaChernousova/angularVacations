import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Input()
  teamClassName: string;

  @Output()
  onHide: EventEmitter<boolean> = new EventEmitter<boolean>();

  public isHidden: boolean;

  ngOnInit() {
    this.isHidden = false;
  }

  hideUsers(): void {
    this.isHidden = !this.isHidden;
    this.onHide.emit(this.isHidden);
  }

}
