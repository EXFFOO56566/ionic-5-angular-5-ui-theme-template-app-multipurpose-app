import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineHomePage } from './offline-home.page';

describe('OfflineHomePage', () => {
  let component: OfflineHomePage;
  let fixture: ComponentFixture<OfflineHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
