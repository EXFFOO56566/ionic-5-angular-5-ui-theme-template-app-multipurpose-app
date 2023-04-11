import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestImageDetailsPage } from './rest-image-details.page';

describe('RestImageDetailsPage', () => {
  let component: RestImageDetailsPage;
  let fixture: ComponentFixture<RestImageDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestImageDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestImageDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
