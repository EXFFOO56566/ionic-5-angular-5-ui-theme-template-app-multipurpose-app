import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEx4Page } from './register-ex4.page';

describe('RegisterEx4Page', () => {
  let component: RegisterEx4Page;
  let fixture: ComponentFixture<RegisterEx4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEx4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEx4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
