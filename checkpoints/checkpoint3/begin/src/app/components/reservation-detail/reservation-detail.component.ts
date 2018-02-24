import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'sc-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {

  public nationalities = [
    {value: 'PT', text: 'Portuguese'},
    {value: 'BR', text: 'Brazilian'},
    {value: 'EN', text: 'English'}
  ];

  constructor(private appService: AppService) { }

  today() {
    return this.appService.today();
  }

  eighteenYearsAgo() {
    return this.appService.eighteenYearsAgo();
  }

  emailValidator() {
    return (email: string) => this.appService.isValidEmail(email);
  }

  ngOnInit() {
  }

}
