import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParallaxHomePage } from './parallax-home.page';

describe('ParallaxHomePage', () => {
  let component: ParallaxHomePage;
  let fixture: ComponentFixture<ParallaxHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallaxHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParallaxHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
