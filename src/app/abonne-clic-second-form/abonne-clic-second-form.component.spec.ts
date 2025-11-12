import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbonneClicSecondFormComponent } from './abonne-clic-second-form.component';

describe('AbonneClicSecondFormComponent', () => {
  let component: AbonneClicSecondFormComponent;
  let fixture: ComponentFixture<AbonneClicSecondFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneClicSecondFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbonneClicSecondFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
