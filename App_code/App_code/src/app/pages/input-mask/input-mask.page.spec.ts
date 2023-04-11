import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputMaskPage } from './input-mask.page';

describe('InputMaskPage', () => {
  let component: InputMaskPage;
  let fixture: ComponentFixture<InputMaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMaskPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputMaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
