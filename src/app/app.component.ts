import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes Factures', url: '/factures', icon: 'mail' },
    {
      title: 'Paiements Express',
      url: '/paiement-express',
      icon: 'paper-plane',
    },
    { title: 'Assistance', url: '/assistance', icon: 'heart' },
    { title: 'Abonné fi clic', url: '/abonne-clic', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
