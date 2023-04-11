import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestRegisterPage } from './rest-register.page';

describe('RestRegisterPage', () => {
  let component: RestRegisterPage;
  let fixture: ComponentFixture<RestRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestRegisterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
