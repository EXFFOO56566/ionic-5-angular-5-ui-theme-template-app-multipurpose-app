import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterHomePage } from './register-home.page';

describe('RegisterHomePage', () => {
  let component: RegisterHomePage;
  let fixture: ComponentFixture<RegisterHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
