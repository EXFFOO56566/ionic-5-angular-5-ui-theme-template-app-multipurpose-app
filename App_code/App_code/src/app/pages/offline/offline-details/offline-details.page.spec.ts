import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineDetailsPage } from './offline-details.page';

describe('OfflineDetailsPage', () => {
  let component: OfflineDetailsPage;
  let fixture: ComponentFixture<OfflineDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
