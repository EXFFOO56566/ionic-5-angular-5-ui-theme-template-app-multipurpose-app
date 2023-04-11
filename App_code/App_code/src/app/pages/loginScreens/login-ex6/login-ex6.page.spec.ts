import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEx6Page } from './login-ex6.page';

describe('LoginEx6Page', () => {
  let component: LoginEx6Page;
  let fixture: ComponentFixture<LoginEx6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEx6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEx6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
