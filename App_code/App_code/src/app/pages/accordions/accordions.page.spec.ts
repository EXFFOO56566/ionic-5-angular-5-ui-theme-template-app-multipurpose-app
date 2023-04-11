import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccordionsPage } from './accordions.page';

describe('AccordionsPage', () => {
  let component: AccordionsPage;
  let fixture: ComponentFixture<AccordionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccordionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
