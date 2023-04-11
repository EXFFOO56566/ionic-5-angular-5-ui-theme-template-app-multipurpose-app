import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterEx1Page } from './register-ex1.page';

describe('RegisterEx1Page', () => {
  let component: RegisterEx1Page;
  let fixture: ComponentFixture<RegisterEx1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterEx1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterEx1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
