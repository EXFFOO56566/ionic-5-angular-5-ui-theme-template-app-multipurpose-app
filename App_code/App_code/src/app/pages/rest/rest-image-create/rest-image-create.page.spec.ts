import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestImageCreatePage } from './rest-image-create.page';

describe('RestImageCreatePage', () => {
  let component: RestImageCreatePage;
  let fixture: ComponentFixture<RestImageCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestImageCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestImageCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
