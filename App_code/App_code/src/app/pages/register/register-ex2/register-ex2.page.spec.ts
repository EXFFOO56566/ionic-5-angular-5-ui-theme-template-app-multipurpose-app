import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEx2Page } from './register-ex2.page';

describe('RegisterEx2Page', () => {
  let component: RegisterEx2Page;
  let fixture: ComponentFixture<RegisterEx2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEx2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEx2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
