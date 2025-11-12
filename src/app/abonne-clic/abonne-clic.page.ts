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
}
