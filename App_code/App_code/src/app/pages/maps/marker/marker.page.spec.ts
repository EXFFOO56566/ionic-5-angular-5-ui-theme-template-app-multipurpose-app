import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MarkerPage } from './marker.page';

describe('MarkerPage', () => {
  let component: MarkerPage;
  let fixture: ComponentFixture<MarkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MarkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
