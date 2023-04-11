import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Payment2Page } from './payment2.page';

describe('Payment2Page', () => {
  let component: Payment2Page;
  let fixture: ComponentFixture<Payment2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Payment2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Payment2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
