import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FactureListPage } from './facture-list.page';

describe('FactureListPage', () => {
  let component: FactureListPage;
  let fixture: ComponentFixture<FactureListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
