import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignaturePadPage } from './signature-pad.page';

describe('SignaturePadPage', () => {
  let component: SignaturePadPage;
  let fixture: ComponentFixture<SignaturePadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignaturePadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignaturePadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
