import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abonne-clic',
  templateUrl: './abonne-clic.page.html',
  styleUrls: ['./abonne-clic.page.scss'],
})
export class AbonneClicPage implements OnInit {
  offers: string[] = ['ADSL', 'VDSL', 'BEEFIBRE'];
  constructor() {}

  ngOnInit() {}
}
