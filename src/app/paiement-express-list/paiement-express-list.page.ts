import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-express-list',
  templateUrl: './paiement-express-list.page.html',
  styleUrls: ['./paiement-express-list.page.scss'],
})
export class PaiementExpressListPage implements OnInit {
  factures = [
    {
      id: '412587451',
      period: 'Janvier 2024',
      amount: 150.0,
      status: 'En attente',
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
      status: 'En attente',
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
