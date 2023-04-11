import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEx4Page } from './login-ex4.page';

describe('LoginEx4Page', () => {
  let component: LoginEx4Page;
  let fixture: ComponentFixture<LoginEx4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEx4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEx4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
