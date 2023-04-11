import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SliderHomePage } from './slider-home.page';

describe('SliderHomePage', () => {
  let component: SliderHomePage;
  let fixture: ComponentFixture<SliderHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SliderHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
