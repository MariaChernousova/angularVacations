import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'table-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {

  @Input()
  public content: string;
  
  @Input()
  public className: string;

  constructor() {}
}
