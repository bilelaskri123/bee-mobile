import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardMenuPage } from './dashboard-menu.page';

describe('DashboardMenuPage', () => {
  let component: DashboardMenuPage;
  let fixture: ComponentFixture<DashboardMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
