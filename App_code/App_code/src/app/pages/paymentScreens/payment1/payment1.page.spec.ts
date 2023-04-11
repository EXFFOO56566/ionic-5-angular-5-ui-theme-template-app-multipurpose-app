import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Payment1Page } from './payment1.page';

describe('Payment1Page', () => {
  let component: Payment1Page;
  let fixture: ComponentFixture<Payment1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payment1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Payment1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
