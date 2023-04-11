import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginHomePage } from './login-home.page';

describe('LoginHomePage', () => {
  let component: LoginHomePage;
  let fixture: ComponentFixture<LoginHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
