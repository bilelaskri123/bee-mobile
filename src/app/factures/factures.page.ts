import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.page.html',
  styleUrls: ['./factures.page.scss'],
})
export class FacturesPage implements OnInit {
  step: number = 1;
  fixeNumber: string = '';
  cin: string = '';
  constructor() {}

  ngOnInit() {}

  handleFormChange(event: { fixNumber: string; cin: string }) {
    console.log('Form Data:', event);
    this.fixeNumber = event.fixNumber;
    this.cin = event.cin;
    this.step = 2;
  }
}
