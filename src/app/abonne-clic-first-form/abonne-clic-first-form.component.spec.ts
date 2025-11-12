import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbonneClicFirstFormComponent } from './abonne-clic-first-form.component';

describe('AbonneClicFirstFormComponent', () => {
  let component: AbonneClicFirstFormComponent;
  let fixture: ComponentFixture<AbonneClicFirstFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbonneClicFirstFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbonneClicFirstFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
