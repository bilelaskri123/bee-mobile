import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaiementExpressPage } from './paiement-express.page';

describe('PaiementExpressPage', () => {
  let component: PaiementExpressPage;
  let fixture: ComponentFixture<PaiementExpressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementExpressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
