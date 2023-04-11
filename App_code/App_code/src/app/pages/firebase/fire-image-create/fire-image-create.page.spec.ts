import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireImageCreatePage } from './fire-image-create.page';

describe('FireImageCreatePage', () => {
  let component: FireImageCreatePage;
  let fixture: ComponentFixture<FireImageCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireImageCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireImageCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
