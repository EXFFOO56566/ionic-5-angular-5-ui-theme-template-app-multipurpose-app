import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmobPage } from './admob.page';

describe('AdmobPage', () => {
  let component: AdmobPage;
  let fixture: ComponentFixture<AdmobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
