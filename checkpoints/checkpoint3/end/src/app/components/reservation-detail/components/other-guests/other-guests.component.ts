import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';

@Component({
  selector: 'sc-other-guests',
  templateUrl: './other-guests.component.html',
  styleUrls: ['./other-guests.component.scss']
})
export class OtherGuestsComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  today() {
    return this.appService.today();
  }

  emailValidator() {
    return (email: string) => this.appService.isValidEmail(email);
  }
}
