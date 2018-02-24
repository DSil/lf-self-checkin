import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  public optionsTypeRoom: object[] = [
    {code: '1', value: 'single', text: 'Single'},
    {code: '2', value: 'double', text: 'Double'},
    {code: '3', value: 'triple', text: 'Triple'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
