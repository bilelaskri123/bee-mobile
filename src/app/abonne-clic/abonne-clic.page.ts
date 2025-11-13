import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonne-clic',
  templateUrl: './abonne-clic.page.html',
  styleUrls: ['./abonne-clic.page.scss'],
})
export class AbonneClicPage implements OnInit {
  step: number = 1;
  constructor() {}

  ngOnInit() {}

  onSelectOffer(event: { offer: string; price: number }) {
    console.log('Selected offer:', event.offer, 'with price:', event.price);
    this.step = 2;
  }

  onFirstFormChange(event: { fixNumber: string; cin: string }) {
    console.log('First Form Data:', event);
    this.step = 3;
  }

  onSecondFormChange(event: { fixNumber: string; cin: string }) {
    console.log('Second Form Data:', event);
    this.step = 4;
  }
}
