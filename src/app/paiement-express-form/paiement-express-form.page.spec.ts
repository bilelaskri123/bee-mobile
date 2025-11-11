import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaiementExpressFormPage } from './paiement-express-form.page';

describe('PaiementExpressFormPage', () => {
  let component: PaiementExpressFormPage;
  let fixture: ComponentFixture<PaiementExpressFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementExpressFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
