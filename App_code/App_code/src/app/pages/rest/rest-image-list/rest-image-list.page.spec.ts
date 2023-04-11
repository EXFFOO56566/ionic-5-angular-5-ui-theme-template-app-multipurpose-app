import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestImageListPage } from './rest-image-list.page';

describe('RestImageListPage', () => {
  let component: RestImageListPage;
  let fixture: ComponentFixture<RestImageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestImageListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestImageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
