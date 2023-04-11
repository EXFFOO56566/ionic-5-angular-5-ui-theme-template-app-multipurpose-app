import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestHomePage } from './rest-home.page';

describe('RestHomePage', () => {
  let component: RestHomePage;
  let fixture: ComponentFixture<RestHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
