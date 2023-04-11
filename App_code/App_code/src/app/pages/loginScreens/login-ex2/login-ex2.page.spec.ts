import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEx2Page } from './login-ex2.page';

describe('LoginEx2Page', () => {
  let component: LoginEx2Page;
  let fixture: ComponentFixture<LoginEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
