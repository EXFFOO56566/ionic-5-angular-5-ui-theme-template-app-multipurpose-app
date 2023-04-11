import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignaturePickerPage } from './signature-picker.page';

describe('SignaturePickerPage', () => {
  let component: SignaturePickerPage;
  let fixture: ComponentFixture<SignaturePickerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturePickerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignaturePickerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
