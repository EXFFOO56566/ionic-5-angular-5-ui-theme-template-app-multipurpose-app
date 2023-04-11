import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Payment3Page } from './payment3.page';

describe('Payment3Page', () => {
  let component: Payment3Page;
  let fixture: ComponentFixture<Payment3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payment3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Payment3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
