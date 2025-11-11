import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paiement-express',
  templateUrl: './paiement-express.page.html',
  styleUrls: ['./paiement-express.page.scss'],
})
export class PaiementExpressPage implements OnInit {
  step: number = 1;
  fixeNumber: string = '';
  cin: string = '';
  handleFormChange(event: { fixNumber: string; cin: string }) {
    console.log('Form Data:', event);
    this.fixeNumber = event.fixNumber;
    this.cin = event.cin;
    this.step = 2;
  }

  constructor() {}

  ngOnInit() {}
}
