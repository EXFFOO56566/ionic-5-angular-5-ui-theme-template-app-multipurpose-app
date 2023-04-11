import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireImageDetailPage } from './fire-image-detail.page';

describe('FireImageDetailPage', () => {
  let component: FireImageDetailPage;
  let fixture: ComponentFixture<FireImageDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireImageDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireImageDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
