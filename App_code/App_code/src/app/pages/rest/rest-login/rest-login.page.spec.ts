import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestLoginPage } from './rest-login.page';

describe('RestLoginPage', () => {
  let component: RestLoginPage;
  let fixture: ComponentFixture<RestLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
