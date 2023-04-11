import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEx3Page } from './login-ex3.page';

describe('LoginEx3Page', () => {
  let component: LoginEx3Page;
  let fixture: ComponentFixture<LoginEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
