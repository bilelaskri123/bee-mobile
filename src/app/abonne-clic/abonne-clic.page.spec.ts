import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AbonneClicPage } from './abonne-clic.page';

describe('AbonneClicPage', () => {
  let component: AbonneClicPage;
  let fixture: ComponentFixture<AbonneClicPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonneClicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
