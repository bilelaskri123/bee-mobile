import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.page.html',
  styleUrls: ['./facture-list.page.scss'],
})
export class FactureListPage implements OnInit {
  factures = [
    {
      id: '412587451',
      period: 'Janvier 2024',
      amount: 150.0,
      status: 'Payée',
    },
    {
      id: '412587452',
      period: 'Février 2024',
      amount: 200.0,
      status: 'En attente',
    },
    {
      id: '412587453',
      period: 'Mars 2024',
      amount: 175.5,
      status: 'Payée',
    },
    {
      id: '412587454',
      period: 'Avril 2024',
      amount: 220.0,
      status: 'En attente',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
