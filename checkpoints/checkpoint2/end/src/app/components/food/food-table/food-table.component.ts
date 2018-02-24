import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sc-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss']
})
export class FoodTableComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;

  public optionsTypeFood: object[] = [
    {value: 'meat', text: 'Meat'},
    {value: 'fish', text: 'Fish'},
    {value: 'vegan', text: 'Vegan'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
