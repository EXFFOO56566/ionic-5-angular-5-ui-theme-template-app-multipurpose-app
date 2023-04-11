import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestCreatePage } from './rest-create.page';

describe('RestCreatePage', () => {
  let component: RestCreatePage;
  let fixture: ComponentFixture<RestCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
