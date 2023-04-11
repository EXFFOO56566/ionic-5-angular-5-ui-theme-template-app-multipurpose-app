import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEx1Page } from './login-ex1.page';

describe('LoginEx1Page', () => {
  let component: LoginEx1Page;
  let fixture: ComponentFixture<LoginEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
