import {Component, ViewChild} from '@angular/core';
import {AppController, AppService} from '@lightweightform/core';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('lfApp') lfApp: AppController;
  actions = [
    {
      name: 'Save',
      style: 'outline-secondary',
      icon: 'save',
      callback: () => {
        alert('save not implemented');
      },
    },
    {
      name: 'Load',
      style: 'outline-secondary',
      icon: 'folder-open',
      callback: () => {
        alert('load not implemented');
      },
    },
    {
      name: 'Print',
      style: 'outline-secondary',
      icon: 'print',
      callback: () => {
        alert('print not implemented');
      },
    },
    {
      name: 'Submit',
      style: 'outline-success',
      icon: 'send',
      callback: () => {
        this.submit();
      },
    },
  ];

  constructor(private appService: AppService) { }

  submit() {
    if (this.lfApp.isValid) {
      fetch('https://selfcheckin.opensoft.pt/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.appService.value),
        mode: 'cors'
      }).then((response) => {
        console.log(response);
        alert('Check-in successful. Enjoy your stay.');
      }).catch((ex) => {
        console.log(ex);
        alert(ex);
      });
    }
  }
}
