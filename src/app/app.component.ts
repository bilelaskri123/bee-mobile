import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes Factures', url: '/folder/inbox', icon: 'mail' },
    { title: 'Paiements Express', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Assistance', url: '/folder/favorites', icon: 'heart' },
    { title: 'Abonné fi clic', url: '/folder/archived', icon: 'archive' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
