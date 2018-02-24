import { Component, OnInit } from '@angular/core';
import {AppService as LfAppService} from '@lightweightform/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'sc-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor(private lfAppService: LfAppService, private appService: AppService) { }

  ngOnInit() {
  }

  public get numAdultsAndChildren() {
    if (this.lfAppService.value === null) {
      return [];
    }
    const appValue = (this.lfAppService.value as any).reservationDetail.otherGuests.otherGuestsTable;
    const adults = appValue.reduce((numAdults: number, guest) =>
        guest && guest.birthDate && this.appService.age(Date.now(), guest.birthDate) > 18
          ? numAdults + 1
          : numAdults
      , 0);
    return [adults + 1, appValue.length - adults];
  }
}
