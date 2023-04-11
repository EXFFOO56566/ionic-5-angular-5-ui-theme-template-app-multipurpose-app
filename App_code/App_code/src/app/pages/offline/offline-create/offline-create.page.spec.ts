import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfflineCreatePage } from './offline-create.page';

describe('OfflineCreatePage', () => {
  let component: OfflineCreatePage;
  let fixture: ComponentFixture<OfflineCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfflineCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
