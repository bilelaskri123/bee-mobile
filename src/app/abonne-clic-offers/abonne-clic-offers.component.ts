import { Component, OnInit, output } from '@angular/core';

@Component({
  selector: 'app-abonne-clic-offers',
  templateUrl: './abonne-clic-offers.component.html',
  styleUrls: ['./abonne-clic-offers.component.scss'],
})
export class AbonneClicOffersComponent implements OnInit {
  selectOfferEvent = output<{
    offer: string;
    price: number;
  }>();
  constructor() {}

  ngOnInit() {}

  selectOffer(offer: string, price: number) {
    this.selectOfferEvent.emit({ offer, price });
  }
}
