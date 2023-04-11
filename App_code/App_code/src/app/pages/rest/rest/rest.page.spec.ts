import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestPage } from './rest.page';

describe('RestPage', () => {
  let component: RestPage;
  let fixture: ComponentFixture<RestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
