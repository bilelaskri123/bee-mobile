import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.page.html',
  styleUrls: ['./assistance.page.scss'],
})
export class AssistancePage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  reclamationForm: FormGroup;
  tickets = [
    {
      id: '412587451',
      subject: 'Problème de connexion',
      fixedNumber: '0123456789',
      creationDate: '2024-01-15',
      subscriptionType: 'ADSL',
      status: 'En attente',
    },
    {
      id: '412587451',
      subject: 'Problème de connexion',
      fixedNumber: '0123456789',
      creationDate: '2024-01-15',
      subscriptionType: 'ADSL',
      status: 'En attente',
    },
    {
      id: '412587451',
      subject: 'Problème de connexion',
      fixedNumber: '0123456789',
      creationDate: '2024-01-15',
      subscriptionType: 'ADSL',
      status: 'En attente',
    },
    {
      id: '412587451',
      subject: 'Problème de connexion',
      fixedNumber: '0123456789',
      creationDate: '2024-01-15',
      subscriptionType: 'ADSL',
      status: 'En attente',
    },
  ];
  constructor() {
    this.reclamationForm = new FormGroup({});
  }

  ngOnInit() {}

  /* Modal */

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: CustomEvent<any>) {}

  onSubmit() {}
}
