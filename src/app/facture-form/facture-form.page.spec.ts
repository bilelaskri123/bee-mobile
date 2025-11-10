import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactureFormPage } from './facture-form.page';

describe('FactureFormPage', () => {
  let component: FactureFormPage;
  let fixture: ComponentFixture<FactureFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
