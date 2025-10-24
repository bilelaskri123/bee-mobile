import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAbonnementPage } from './add-abonnement.page';

describe('AddAbonnementPage', () => {
  let component: AddAbonnementPage;
  let fixture: ComponentFixture<AddAbonnementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAbonnementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
