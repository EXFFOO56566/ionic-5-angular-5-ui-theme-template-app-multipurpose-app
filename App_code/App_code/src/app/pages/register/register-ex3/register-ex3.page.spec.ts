import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEx3Page } from './register-ex3.page';

describe('RegisterEx3Page', () => {
  let component: RegisterEx3Page;
  let fixture: ComponentFixture<RegisterEx3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEx3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEx3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
