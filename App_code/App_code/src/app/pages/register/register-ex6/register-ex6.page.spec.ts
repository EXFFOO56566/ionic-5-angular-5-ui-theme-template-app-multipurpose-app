import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEx6Page } from './register-ex6.page';

describe('RegisterEx6Page', () => {
  let component: RegisterEx6Page;
  let fixture: ComponentFixture<RegisterEx6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEx6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEx6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
