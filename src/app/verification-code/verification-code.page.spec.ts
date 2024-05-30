import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerificationCodePage } from './verification-code.page';

describe('VerificationCodePage', () => {
  let component: VerificationCodePage;
  let fixture: ComponentFixture<VerificationCodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationCodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
