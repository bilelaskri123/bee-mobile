import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbonneClicThirdFormComponent } from './abonne-clic-third-form.component';

describe('AbonneClicThirdFormComponent', () => {
  let component: AbonneClicThirdFormComponent;
  let fixture: ComponentFixture<AbonneClicThirdFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneClicThirdFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbonneClicThirdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
