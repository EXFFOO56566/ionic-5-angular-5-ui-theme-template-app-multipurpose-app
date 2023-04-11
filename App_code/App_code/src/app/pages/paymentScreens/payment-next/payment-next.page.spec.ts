import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentNextPage } from './payment-next.page';

describe('PaymentNextPage', () => {
  let component: PaymentNextPage;
  let fixture: ComponentFixture<PaymentNextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentNextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentNextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
