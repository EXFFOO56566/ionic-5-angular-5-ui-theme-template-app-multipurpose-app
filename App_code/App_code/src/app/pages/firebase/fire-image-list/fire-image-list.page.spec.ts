import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FireImageListPage } from './fire-image-list.page';

describe('FireImageListPage', () => {
  let component: FireImageListPage;
  let fixture: ComponentFixture<FireImageListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireImageListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FireImageListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
