import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaiementExpressListPage } from './paiement-express-list.page';

describe('PaiementExpressListPage', () => {
  let component: PaiementExpressListPage;
  let fixture: ComponentFixture<PaiementExpressListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementExpressListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
